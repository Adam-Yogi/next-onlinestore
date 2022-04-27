import Link from 'next/link';
import { useState, useContext, useEffect } from 'react';
import AddressModal from '../components/AddressModal';
import LayoutNav from '../components/LayoutNav';
import { Context } from '../store/AppContext';
import CheckoutItemComponent from '../components/CheckoutItemComponent';
import PaymentModals from '../components/PaymentModal';

const checkout = () => {
  // initial state => alamat default user

  const { store, actions } = useContext(Context);
  const [userCheckout, setUserCheckout] = useState([]);
  useEffect(() => {
    actions.getCheckoutItem().then(() => {
      setUserCheckout(store.userCheckoutItems);
    });
  }, []);

  const [selectedProvince, setProv] = useState(store.user.provinsi);
  const [selectedProvID, setProvID] = useState(store.user.idProvinsi);

  const [selectedCity, setCity] = useState(store.user.kota);
  const [selectedCityID, setCityID] = useState(store.user.idKota);
  const [alamat, setAlamat] = useState(store.user.alamat);
  const [postal, setPostal] = useState(store.user.kodepos);
  const [penerima, setPenerima] = useState(store.user.nama);
  const [phone, setPhone] = useState(store.user.no_telp);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [useAlamatLain, setUseAlamatLain] = useState(false);
  const [totalOngkir, setTotalOngkir] = useState(0);

  const liftTotalOngkir = (prevState, newState) => {
    setTotalOngkir(Number(totalOngkir) - Number(prevState) + Number(newState));
  };

  const handlePaymentBack = () => {
    setShowPaymentModal(false);
  };
  const handleBack = () => {
    setShowAddressModal(false);
    setUseAlamatLain(false);
  };
  const openModal = () => {
    setShowAddressModal(true);
  };

  const handleSave = (
    penerima,
    phone,
    selectedCity,
    selectedCityID,
    selectedProvince,
    selectedProvID,
    alamat,
    postal
  ) => {
    setPenerima(penerima);
    setPhone(phone);
    setCity(selectedCity);
    setCityID(selectedCityID);
    setProv(selectedProvince);
    setProvID(selectedProvID);
    setAlamat(alamat);
    setPostal(postal);
    setShowAddressModal(false);
  };

  const resetAlamat = () => {
    setPenerima(store.user.nama);
    setPhone(store.user.no_telp);
    setProv(store.user.provinsi);
    setProvID(store.user.idProvinsi);
    setCity(store.user.kota);
    setCityID(store.user.idKota);
    setAlamat(store.user.alamat);
    setPostal(store.user.kodepos);
  };

  const handleChoosePayment = () => {
    if (
      !(
        penerima ||
        phone ||
        alamat ||
        postal ||
        selectedCity ||
        selectedProvince ||
        selectedCityID ||
        selectedProvID
      )
    ) {
      alert('Pilih alamat pengiriman terlebih dahulu');
      return;
    } else if (totalOngkir == 0) {
      alert('pilih kurir pengiriman');
      return;
    }
    setShowPaymentModal(true);
  };
  return (
    <>
      <LayoutNav>
        {store.token && store.token != '' && store.token != undefined ? (
          <div className=" p-4 md:grid md:grid-cols-3 md:items-start gap-3 md:gap-4 w-100">
            <div
              className={`flex 
             
           flex-col gap-3 md:col-span-2`}
            >
              <div className="p-3 bg-blue-50 rounded-md shadow-xl">
                <h2 className="font-bold font-roboto text-2xl">
                  Alamat Pengiriman
                </h2>
                {penerima &&
                phone &&
                alamat &&
                postal &&
                selectedCity &&
                selectedProvince &&
                selectedCityID &&
                selectedProvID ? (
                  <>
                    <p>{penerima}</p>
                    <p>{phone}</p>
                    <p>{`${alamat},${postal}, ${selectedCity}, ${selectedProvince}`}</p>
                  </>
                ) : (
                  <button
                    className="block bg-green-400 p-1 font-semibold rounded-lg shadow-lg text-white"
                    onClick={() => {
                      resetAlamat();
                    }}
                  >
                    Kirim ke Alamat Utama
                  </button>
                )}

                <button
                  className="text-sm text-blue-400 hover:text-blue-500"
                  onClick={() => {
                    if (useAlamatLain) {
                      resetAlamat();
                      setUseAlamatLain(false);
                    } else {
                      openModal();
                      setUseAlamatLain(true);
                    }
                  }}
                >
                  <p>
                    {useAlamatLain
                      ? 'Gunakan Alamat Utama'
                      : 'Kirim ke Alamat Lain'}
                  </p>
                </button>
              </div>
              {userCheckout.length > 0 ? (
                <>
                  {userCheckout.map((CheckoutItem, index) => (
                    <CheckoutItemComponent
                      CheckoutItem={CheckoutItem}
                      buyerLocation={selectedCityID}
                      totalOngkirCount={liftTotalOngkir}
                      index={index}
                      key={index}
                    />
                  ))}
                </>
              ) : (
                ''
              )}
            </div>
            <div className="grid md:gap-3 md:bg-gradient-to-b md:from-black bg-opacity-60 md:p-8 md:rounded-lg md:shadow-xl  w-100 gap-1">
              <h3 className="text-white text-lg">
                Subtotal {store.totalQuantity} items
              </h3>
              <p className="text-white font-semibold text-xl">
                Total Harga Barang:
                <br />
                Rp{store.userCart.totalHarga}
              </p>
              <p className="text-white font-semibold text-xl">
                Total Ongkir:
                <br />
                Rp{totalOngkir}.00
              </p>
              <p className="text-white font-bold text-2xl">
                Grand Total: <br />
                <span className="text-3xl">
                  Rp{Number(store.userCart.totalHarga) + Number(totalOngkir)}.00
                </span>
              </p>
              <button
                onClick={() => handleChoosePayment()}
                className="bg-gradient-to-r mt-3 hover:bg-gradient-to-l from-purple-600 to-indigo-600 p-2 rounded-lg text-white font-roboto font-bold text-xl border-2 border-transparent hover:border-2 border-opacity-80 hover:border-purple-100 transition-all ease-in-out duration-150"
              >
                Buat Pesanan
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 justify-center items-center h-screen">
            <h1 className="text-xl font-bold text-white">
              Unavailable, please login or register first!
            </h1>
            <Link href="/login">
              <button className="bg-gradient-to-r mt-3 hover:bg-gradient-to-l from-sky-600 to-blue-600 p-2 rounded-lg text-white font-roboto font-bold text-xl border-2 border-transparent hover:border-2 border-opacity-80 hover:border-purple-100 transition-all ease-in-out duration-150">
                Login
              </button>
            </Link>
          </div>
        )}
      </LayoutNav>
      <AddressModal
        isShown={showAddressModal}
        liftStateUp={handleSave}
        handleBack={handleBack}
      />
      <PaymentModals
        isShown={showPaymentModal}
        closeModal={handlePaymentBack}
        totalHarga={Number(store.userCart.totalHarga) + Number(totalOngkir)}
      />
    </>
  );
};

export default checkout;
