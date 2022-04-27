import LayoutNav from '../components/LayoutNav';
import { Context } from '../store/AppContext';
import { useContext, useState, useEffect } from 'react';
import { RefreshIcon } from '@heroicons/react/outline';
import CartItem from '../components/CartItem';
import Link from 'next/link';
import { useRouter } from 'next/router';

const cart = () => {
  const router = useRouter();
  const { store, actions } = useContext(Context);
  const [userCart, setUserCart] = useState(store.userCart.data);
  useEffect(() => {
    actions.getCartItem().then(() => {
      setUserCart(store.userCart.data);
    });
  }, []);

  const handleLoad = () => {
    actions.getCartItem().then(() => {
      setUserCart(store.userCart.data);
    });
  };
  const handleCheckout = () => {
    if (store.totalQuantity == 0) {
      alert('Tidak ada produk di keranjangmu');
    } else if (
      !store.user.alamat ||
      !store.user.kodepos ||
      !store.user.idKota ||
      !store.user.idProvinsi ||
      !store.user.provinsi ||
      !store.user.kota
    ) {
      alert('Lengkapi alamatmu terlebih dahulu');
      router.push('/updateaddress');
    } else router.push('/checkout');
  };
  return (
    <LayoutNav>
      {store.token && store.token != '' && store.token != undefined ? (
        <div className="p-4 md:grid md:grid-cols-3 md:items-start gap-3 md:gap-4 w-100">
          <div
            className={`flex ${
              store.totalQuantity == 0 ? 'justify-center items-center' : ''
            } flex-col gap-3 md:col-span-2`}
          >
            {!(store.totalQuantity > 0) ? (
              <h1 className="text-white text-bold text-center text-3xl">
                You don't have any product in your cart
              </h1>
            ) : (
              ''
            )}
            {userCart.length > 0 &&
            userCart != undefined &&
            userCart != null ? (
              <>
                {userCart.map((cartItem) => {
                  return (
                    <CartItem
                      key={cartItem.productID}
                      bookId={cartItem.productID}
                      title={cartItem.nama}
                      harga={cartItem.harga}
                      jumlah={cartItem.quantity}
                    />
                  );
                })}
              </>
            ) : (
              ''
            )}
          </div>
          <div className="grid md:gap-3 md:bg-gradient-to-b md:from-black bg-opacity-60 md:p-8 md:rounded-lg md:shadow-xl  w-100 my-2 gap-1">
            <h3 className="text-white text-lg">
              Subtotal{' '}
              {store.userCart.totalQuantity
                ? store.userCart.totalQuantity
                : '0'}{' '}
              items
            </h3>
            <p className="text-white font-bold text-2xl">
              Total:
              <br />
              Rp
              {store.userCart.totalHarga &&
              store.userCart.totalHarga != '' &&
              store.userCart.totalHarga != undefined
                ? store.userCart.totalHarga
                : '0'}
            </p>

            <button
              onClick={() => {
                handleCheckout();
              }}
              className=" disabled:opacity-20 bg-gradient-to-r mt-3 hover:bg-gradient-to-l from-purple-600 to-indigo-600 p-2 rounded-lg text-white font-roboto font-bold text-xl border-2 border-transparent hover:border-2 border-opacity-80 hover:border-purple-100 transition-all ease-in-out duration-150"
            >
              Checkout
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
  );
};

export default cart;
