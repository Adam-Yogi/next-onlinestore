import { ArrowLeftIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import qrislogo from '../public/images/qrislogo.png';
import gopaylogo from '../public/images/gopaylogo.png';
import BankRadioBtn from './BankRadioBtn';
import { useState, useContext } from 'react';
import { Context } from '../store/AppContext';

const PaymentModals = ({ isShown, closeModal, totalHarga }) => {
  const { store, actions } = useContext(Context);
  const handleClick = () => {
    actions.makeOrder(Number(totalHarga), selectedPayment);
  };
  const [selectedPayment, setSelectedPayment] = useState('');
  const liftBankValue = (bank) => {
    setSelectedPayment(bank);
  };

  return isShown ? (
    <div className="p-4 fixed top-0 left-0 z-20 w-full h-full text-white bg-opacity-5 flex justify-center items-center backdrop-blur-sm">
      <button
        className="fixed bg-gray-900 text-purple-100 flex items-center justify-center p-2 bg-opacity-50 left-8 z-30 top-8 rounded-md group border-2 border-gray-400 hover:border-white hover:text-indigo-300"
        onClick={() => closeModal()}
      >
        <ArrowLeftIcon className="h-8 w-8 " /> Back
      </button>
      <div className="bg-indigo-800 p-4 flex flex-col gap-2 shadow-xl  backdrop-blur-xl bg-opacity-80 rounded-md ">
        <p className="text-3xl text-center font-bold">Pilih Pembayaran</p>
        <div className="place-self-center justify-center flex flex-col gap-3">
          <BankRadioBtn valueLifter={liftBankValue} />

          <button
            onClick={() => {
              handleClick();
            }}
            className="md:text-4xl bg-gradient-to-r hover:bg-gradient-to-l from-purple-600 to-indigo-600 p-2 rounded-lg text-white font-roboto font-bold text-2xl border-2 border-transparent hover:border-2 border-opacity-80 hover:border-purple-100 transition-all ease-in-out duration-150"
          >
            Bayar
          </button>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default PaymentModals;
