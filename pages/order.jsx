import LayoutNav from '../components/LayoutNav';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../store/AppContext';
import { RefreshIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const order = () => {
  const [userOrder, setUserOrder] = useState({});
  const { store, actions } = useContext(Context);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    actions.getOrder().then(() => {
      setUserOrder(store.userOrder);
    });
  }, []);

  const statusTranslate = (status) => {
    if (status == 'pending') return 'Menunggu Pembayaran';
    else if (status == 'settlement') return 'Pembayaran Berhasil';
    else if (status == 'expire') return 'Expired';
    else if (status == 'failure') return 'Transaksi Gagal';
  };

  const handleCekStatus = () => {
    setShowLoading(true);
    actions.cekStatus(userOrder.orderID).then(() => {
      setShowLoading(false);
    });
  };
  return (
    <LayoutNav>
      <div className="w-100 h-full justify-center items-center flex flex-col text-white gap-3">
        {Object.keys(userOrder).length !== 0 ? (
          <>
            <h1 className="text-5xl lg:text-8xl font-bold text-center">
              Pesanan
            </h1>
            <div className="bg-black border-2 border-purple-200 bg-opacity-70 shadow-lg rounded-md backdrop-blur-lg backdrop-filter place-self-center grid grid-cols-3 items-center justify-evenly flex-col p-4 w-100 md:w-8/12">
              <div className="">
                <p className="text-xl md:text-2xl lg:text-3xl font-bold font-roboto">
                  Total Tagihan: <br /> <span>Rp{userOrder.totalHarga}</span>
                </p>
                <p className="text-xs md:text-sm lg:text-md ">Order ID : 1</p>
                <p>Transfer Bank : {userOrder.bank}</p>
              </div>

              <div className="flex justify-center items-center">
                {showLoading ? (
                  <RefreshIcon className="w-4 animate-spin" />
                ) : (
                  <span
                    className={`${
                      userOrder.status == 'pending' && 'bg-orange-300'
                    } ${userOrder.status == 'settlement' && 'bg-green-400'} ${
                      userOrder.status == 'expire' && 'bg-red-400'
                    } ${
                      userOrder.status == 'failure' && 'bg-red-500'
                    } p-1 text-xs lg:text-lg rounded-lg`}
                  >
                    {statusTranslate(userOrder.status)}
                  </span>
                )}
              </div>
              <div className="flex gap-2 md:gap-3 justify-evenly items-center">
                {userOrder.status == 'pending' && (
                  <Link href="/pembayaran">
                    <button className="md:text-4xl bg-gradient-to-r hover:bg-gradient-to-l from-purple-600 to-indigo-600 p-2 rounded-lg text-white font-roboto font-bold text-xl border-2 border-transparent hover:border-2 border-opacity-80 hover:border-purple-100 transition-all ease-in-out duration-150">
                      Bayar
                    </button>
                  </Link>
                )}

                <button
                  onClick={() => {
                    handleCekStatus();
                  }}
                  className="md:text-4xl bg-gradient-to-r hover:bg-gradient-to-l from-purple-600 to-indigo-600 p-2 rounded-full text-white font-roboto font-bold text-2xl border-2 border-transparent hover:border-2 border-opacity-80 hover:border-purple-100 transition-all ease-in-out duration-150"
                >
                  <RefreshIcon className="w-6 md:w-8" />
                </button>
              </div>
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
