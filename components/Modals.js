import { ArrowRightIcon } from '@heroicons/react/solid';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Modals = ({
  isShown,
  closeModal,
  bookId,
  title,
  price,
  available,
  dateAdded,
  imgUrl,
}) => {
  const router = useRouter();
  return isShown ? (
    <div
      className="p-4 fixed top-0 left-0 z-20 w-full h-full text-white bg-gradient-to-b;

     from-indigo-600;
     to-[#191c3a]; bg-opacity-50 flex justify-center items-center backdrop-blur-sm"
    >
      <button
        className="fixed bg-gray-900 text-gray-300 flex items-center justify-center p-2 bg-opacity-50 left-8 z-30 top-8 rounded-md group border-2 border-gray-400 hover:border-white hover:text-indigo-300"
        onClick={() => closeModal()}
      >
        <ArrowLeftIcon className="h-8 w-8 " /> Back
      </button>
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
        <div className="flex md:gap-2 flex-col md:self-center">
          <h1 className="font-bold md:text-5xl text-3xl">{title}</h1>
          <p className={`text-lg md:text-xl text-[#d60ac9] animate-pulse`}>
            {available <= 5 ? (
              <>{available == 0 ? 'Kosong' : `${available} left`}</>
            ) : (
              'Tersedia'
            )}
          </p>

          <p className="text-2xl md:text-4xl font-semibold">Rp{price}</p>
          <p className="text-sm md:text-md text-gray-300">
            Date Added : {dateAdded}
          </p>

          <Link href={`/details?id=${bookId}`}>
            <button
              onClick={() => {
                closeModal();
              }}
              className=" self-stretch bg-gradient-to-r mt-3 hover:bg-gradient-to-l from-purple-400 to-indigo-400 p-2 rounded-lg text-white font-roboto font-bold text-xl border-2 border-transparent hover:border-2 border-opacity-80 hover:border-purple-100 transition-all ease-in-out duration-150"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default Modals;
