import LayoutNav from '../components/LayoutNav';
import { Context } from '../store/AppContext';
import { useContext, useState, useEffect } from 'react';
import { RefreshIcon } from '@heroicons/react/outline';

import CartItem from '../components/CartItem';

const cart = () => {
  const { store, actions } = useContext(Context);
  const [userCart, setUserCart] = useState([]);

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
  return (
    <LayoutNav>
      <div className="p-4 md:grid md:grid-cols-3 md:items-start gap-3 md:gap-4 w-100">
        <div className="flex flex-col gap-3 md:col-span-2">
          {userCart != undefined && userCart != null ? (
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
            <div className="flex flex-col gap-2 h-screen text-2xl font-bold text-white w-full justify-center items-center">
              <button
                onClick={() => handleLoad()}
                className="bg-indigo-400 hover:bg-indigo-600 flex gap-2 text-white rounded-lg p-3 font-semibold shadow-2xl"
              >
                Load Cart <RefreshIcon className="w-10" />
              </button>
            </div>
          )}
        </div>
        <div className="grid md:gap-3 md:bg-black bg-opacity-60 md:p-8 md:rounded-lg md:shadow-xl  w-100 my-2 gap-1">
          <h3 className="text-white text-lg">
            Subtotal{' '}
            {store.userCart.totalQuantity ? store.userCart.totalQuantity : '0'}{' '}
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
          <button className="bg-gradient-to-r mt-3 hover:bg-gradient-to-l from-purple-400 to-indigo-400 p-2 rounded-lg text-white font-roboto font-bold text-xl border-2 border-transparent hover:border-2 border-opacity-80 hover:border-purple-100 transition-all ease-in-out duration-150">
            Checkout
          </button>
        </div>
      </div>
    </LayoutNav>
  );
};

export default cart;
