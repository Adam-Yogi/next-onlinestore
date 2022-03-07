import bookCover from '../public/images/book.jpeg';
import Image from 'next/image';
import { useState } from 'react';
import Modals from './Modals';
import { ArrowLeftIcon } from '@heroicons/react/solid';

const Thumbnail = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="border group hover:border-opacity-100 cursor-pointer border-white border-opacity-25 rounded-lg text-white p-3 transition-all ease-in-out duration-300"
      >
        <div>
          <Image src={bookCover} width={800} height={800} alt="book cover" />
        </div>
        <div className="flex flex-col">
          <h2 className=" group-hover:animate-pulse transition-all ease-in-out duration-300 font-bold text-2xl md:text-3xl ">
            Harry Potter
          </h2>
          <p className="opacity-70 group-hover:opacity-100 flex text-sm md:text-md">
            J.K. Rowling
          </p>
          <p className="font-semibold text-lg md:text-xl py-1 opacity-90 group-hover:opacity-100 ">
            Rp 200.000,00
          </p>
          <hr className="w-11/12 opacity-25 transition-all ease-in-out duration-300 group-hover:opacity-100 self-center" />
          <p className="self-end pt-3 text-sm lg:text-md opacity-75">
            Release Date : 20-02-2002
          </p>
        </div>
      </div>
      {showModal && (
        <button
          className="fixed bg-gray-900 text-gray-300 flex items-center justify-center p-2 bg-opacity-50 left-8 z-30 top-8 rounded-md group border-2 border-gray-400 hover:border-white hover:text-indigo-300"
          onClick={() => setShowModal(false)}
        >
          <ArrowLeftIcon className="h-8 w-8 " /> Back
        </button>
      )}

      <Modals isShown={showModal}></Modals>
    </>
  );
};

export default Thumbnail;
