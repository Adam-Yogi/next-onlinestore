import { ArrowRightIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { useContext } from 'react';
import { Context } from '../store/AppContext';
const CartModal = ({
  isShown,
  bookId,
  title,
  price,
  available,
  dateAdded,
  imgUrl,
}) => {
  const { store, actions } = useContext(Context);
  const router = useRouter();
  const handleAddToCart = async () => {
    await actions.addToCart(bookId, quantity);
    console.log('id buku: ' + bookId);
    console.log('quantity order: ' + quantity);
  };
  const handlePlus = () => {
    if (quantity < available) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
    } else setQuantity(available);
  };
  const handleMinus = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    } else setQuantity(1);
  };
  const [quantity, setQuantity] = useState(1);
  return isShown ? (
    <div
      className="p-4 fixed top-0 left-0 z-20 w-full h-full text-white bg-gradient-to-b;

     from-indigo-600;
     to-[#191c3a]; bg-opacity-50 flex justify-center items-center backdrop-blur-sm"
    >
      <div className="flex flex-col md:grid md:gap-4 md:grid-cols-2  gap-1 overflow-hidden border-white border-2 p-3 md:p-4 border-opacity-60 rounded-lg bg-[#252849] bg-opacity-90 backdrop-blur-lg">
        <div className="flex items-center justify-center rounded-md overflow-hidden w-full  ">
          <Image
            src={imgUrl}
            width={800}
            height={800}
            objectFit="contain"
            alt="book cover"
          />
        </div>
        <div className="flex px-4 md:pl-0 items-center md:items-start md:gap-2 flex-col md:self-center">
          <h1 className="font-bold md:text-5xl text-3xl">{title}</h1>
          <p className="text-lg md:text-xl text-[#d60ac9] animate-pulse">
            {available} left
          </p>
          <p className="text-2xl md:text-4xl font-semibold">Rp{price}</p>
          <div className="flex gap-5 items-center md:place-self-start">
            <MinusCircleIcon
              onClick={() => handleMinus()}
              className="w-14 h-14 hover:text-purple-300"
            />
            <p className="text-5xl font-roboto font-bold">{quantity}</p>
            <PlusCircleIcon
              onClick={() => handlePlus()}
              className="w-14 h-14 hover:text-purple-300"
            />
          </div>
          <button
            onClick={() => handleAddToCart()}
            className=" self-stretch bg-gradient-to-r mt-3 hover:bg-gradient-to-l from-purple-400 to-indigo-400 p-2 rounded-lg text-white font-roboto font-bold text-xl border-2 border-transparent hover:border-2 border-opacity-80 hover:border-purple-100 transition-all ease-in-out duration-150"
          >
            Masukkan Keranjang
          </button>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default CartModal;
