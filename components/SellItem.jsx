import {
  RefreshIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/outline';

import { useState, useContext } from 'react';
import { Context } from '../store/AppContext';

Context;

const SellItem = ({ sellerOrder }) => {
  const { store, actions } = useContext(Context);
  const [showLoading, setShowLoading] = useState(false);
  const [showList, setShowList] = useState(false);
  const handleCekStatus = () => {
    setShowLoading(true);
    actions.cekStatus(sellerOrder.orderID).then(() => {
      setShowLoading(false);
    });
  };
  return (
    <div className="bg-black min-w-full bg-opacity-70 shadow-lg md:rounded-md backdrop-blur-lg backdrop-filter place-self-center ">
      <div className="grid grid-cols-3 items-center justify-evenly flex-col p-3">
        <div className="col-span-2">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold font-roboto">
            Order ID : {sellerOrder.orderID}
          </p>
          <div className="grid grid-cols-4 items-start">
            <p>Alamat</p>
            <p className="col-span-3">: {sellerOrder.alamat}</p>
          </div>
          <div className="grid grid-cols-4 items-start">
            <p>Status</p>
            {showLoading ? (
              <RefreshIcon className="w-4 animate-spin" />
            ) : (
              <p className="col-span-3">: {sellerOrder.status}</p>
            )}
          </div>
        </div>

        <div className="flex gap-2 md:gap-3 justify-evenly items-center">
          <button
            onClick={() => {
              handleCekStatus();
            }}
            className="scale-75 md:text-4xl bg-gradient-to-r hover:bg-gradient-to-l from-purple-600 to-indigo-600 p-2 rounded-full text-white font-roboto font-bold text-2xl border-2 border-transparent hover:border-2 border-opacity-80 hover:border-purple-100 transition-all ease-in-out duration-150"
          >
            <RefreshIcon className="w-7 md:w-9" />
          </button>
        </div>
      </div>
      <div className="mx-3 mb-3  bg-indigo-900 bg-opacity-60 p-3 mt-2 rounded-md ">
        {showList && (
          <>
            <div className="pb-2 space-y-1">
              <p className="font-bold">Daftar Pesanan : </p>
              <div className="grid grid-cols-5 min-w-full font-semibold">
                <p className="col-span-2">Item</p>
                <p className="flex justify-center">Quantity</p>
                <p>Price</p>
                <p>Revenue</p>
              </div>
            </div>
            <div className="flex gap-1 flex-col">
              {sellerOrder.produk.map((item) => (
                <div className="grid grid-cols-5 min-w-full">
                  {' '}
                  <p className="col-span-2">{item.nama_produk}</p>
                  <p className="flex justify-center">{item.quantity}</p>
                  <p>
                    Rp
                    {Number(item.revenue) / Number(item.quantity) > item.revenue
                      ? ' -'
                      : Number(item.revenue) / Number(item.quantity)}
                  </p>
                  <p>Rp{Number(item.revenue)}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="w-100 flex justify-center py-1">
        <button
          onClick={() => {
            setShowList(!showList);
          }}
          className="rounded-full p-1 hover:bg-gray-700 transition-all duration-150 ease-in-out"
        >
          {showList ? (
            <ChevronUpIcon className="w-4" />
          ) : (
            <ChevronDownIcon className="w-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default SellItem;
