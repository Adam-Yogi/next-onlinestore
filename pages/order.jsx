import LayoutNav from '../components/LayoutNav';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../store/AppContext';

import OrderItem from '../components/OrderItem';
import Link from 'next/link';

const order = () => {
  const [userOrder, setUserOrder] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getOrder().then(() => {
      setUserOrder(store.userOrder);
    });
  }, []);

  return (
    <LayoutNav>
      <div className="w-100 h-full justify-center items-center flex flex-col text-white gap-3">
        {userOrder.length !== 0 ? (
          <>
            <h1 className="text-5xl lg:text-8xl font-bold text-center">
              Pesanan
            </h1>
            <div className="flex flex-col gap-3">
              {userOrder.map((item) => {
                return <OrderItem userOrder={item} />;
              })}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-6">
            <p className="text-3xl lg:text-5xl p-10 text-center">
              You don't have any order yet
            </p>
            <div>
              <Link href="/">
                <button className="bg-gradient-to-r hover:bg-gradient-to-l from-green-600 to-lime-600 p-2 rounded-lg text-white font-roboto font-bold text-3xl border-2 border-transparent hover:border-2 border-opacity-80 hover:border-purple-100 transition-all ease-in-out duration-150">
                  Shop
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </LayoutNav>
  );
};

export default order;
