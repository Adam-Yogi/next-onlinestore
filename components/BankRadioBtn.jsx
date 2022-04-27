import { useState, useEffect } from 'react';
import bnilogo from '../public/images/bni.png';
import brilogo from '../public/images/bri.png';
import bcalogo from '../public/images/bca.png';
import Image from 'next/image';

const BankRadioBtn = ({ valueLifter }) => {
  const [selectedBank, setSelectedBank] = useState('bca');
  const isRadioSelected = (val) => val === selectedBank;
  useEffect(() => {
    valueLifter(selectedBank);
  }, [selectedBank]);
  return (
    <div className="grid grid-cols-3 gap-3 ">
      <p className="text-xl col-span-3">Bank Transfer</p>
      <div className="border-2 text-purple-100 flex items-center gap-1 bg-white hover:text-white border-gray-300 hover:border-white p-1 text-2xl rounded-md transition-all duration-150 ease-in-out">
        <input
          type="radio"
          id="bca"
          name="bank-radio-btn"
          value="bca"
          checked={isRadioSelected('bca')}
          onChange={(e) => {
            setSelectedBank(e.currentTarget.value);
          }}
        />
        <label htmlFor="bca">
          <Image src={bcalogo} width="80%" height="80%" objectFit="contain" />
        </label>
      </div>
      <div className="border-2 text-purple-100 flex items-center gap-1 bg-white hover:text-white border-gray-300 hover:border-white p-1 text-2xl rounded-md transition-all duration-150 ease-in-out">
        <input
          type="radio"
          name="bank-radio-btn"
          value="bni"
          checked={isRadioSelected('bni')}
          onChange={(e) => {
            setSelectedBank(e.currentTarget.value);
          }}
        />
        <label htmlFor="bni">
          <Image src={bnilogo} width="80%" height="80%" objectFit="contain" />
        </label>
      </div>
      <div className="border-2 text-purple-100 flex items-center gap-1 bg-white hover:text-white border-gray-300 hover:border-white p-1 text-2xl rounded-md transition-all duration-150 ease-in-out">
        <input
          type="radio"
          name="bank-radio-btn"
          value="bri"
          checked={isRadioSelected('bri')}
          onChange={(e) => {
            setSelectedBank(e.currentTarget.value);
          }}
        />
        <label htmlFor="bri">
          <Image src={brilogo} width="80%" height="80%" objectFit="contain" />
        </label>
      </div>
    </div>
  );
};

export default BankRadioBtn;
