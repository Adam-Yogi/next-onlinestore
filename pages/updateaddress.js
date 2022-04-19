import AddressForm from '../components/AddressForm';
import LayoutNav from '../components/LayoutNav';
import { useContext } from 'react';
import { Context } from '../store/AppContext';
import Link from 'next/link';

const updateaddress = () => {
  const { store, actions } = useContext(Context);

  const handleSave = (
    selectedCity,
    selectedCityID,
    selectedProvince,
    selectedProvID,
    alamat,
    postal
  ) => {
    // Tinggal fetch set user address dari sini ke back end
    actions.updateAddress(
      selectedCity,
      selectedCityID,
      selectedProvince,
      selectedProvID,
      alamat,
      postal
    );
    // Alert change address success(dari flux aja)
    // Redirect ke profile page
  };
  return (
    <LayoutNav>
      {store.token && store.token != '' && store.token != undefined ? (
        <div className=" flex gap-4 flex-col w-100 items-center">
          <h1 className="text-white mt-5 text-5xl font-nunito font-bold">
            Edit Alamat
          </h1>
          <AddressForm liftStateUp={handleSave} />
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
  );
};

export default updateaddress;
