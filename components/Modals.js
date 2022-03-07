import { ArrowRightIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import bookCover from '../public/images/book.jpeg';

const Modals = ({ isShown }) => {
  return isShown ? (
    <div className="p-4 fixed top-0 left-0 z-20 w-full h-full text-white bg-red flex justify-center items-center backdrop-blur-sm">
      <div className="flex flex-col md:grid md:gap-4 md:grid-cols-2  gap-1 overflow-hidden border-white border-2 p-3 md:p-4 border-opacity-75 rounded-lg bg-gray-800">
        <div className="flex items-center justify-center rounded-md overflow-hidden w-full md:border-2 md:border-indigo-100">
          <Image
            src={bookCover}
            width={800}
            height={800}
            objectFit="fill"
            alt="book cover"
          />
        </div>
        <div className="flex md:gap-2 flex-col md:self-center">
          <h1 className="font-bold text-3xl">Harry Potter</h1>
          <p>J.K Rowling</p>
          <p className="text-2xl">Rp 200.000,00</p>
          <p className="text-sm text-gray-300">Release Date : 21-07-2002</p>
          <p className="truncate text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            vel architecto aliquid maiores provident, aperiam quia dicta
            deleniti, fugit reprehenderit ab magni totam! Hic dignissimos rerum
            asperiores. Modi distinctio est esse natus! Quidem, saepe ipsa
            voluptas quo, fugit repellendus, dolorem tenetur autem consequuntur
            adipisci tempora. Voluptatem voluptates vel eligendi quia maiores
            ipsam repellat, id ipsa sequi facere nihil, iusto quidem velit
            beatae nesciunt! Explicabo ipsam maiores vero iure, quaerat quidem
            ea minus, soluta cupiditate omnis debitis rerum modi molestiae, quia
            consequatur iusto veniam? Animi reprehenderit cumque hic numquam
            nobis veniam cum sit adipisci, autem omnis in doloribus quasi
            voluptatum laborum quam odit. Molestias numquam aperiam repellat
            officia dolorem rem, ex nisi, provident saepe maiores laboriosam
            neque excepturi id, inventore perspiciatis.
          </p>

          <button className="my-2 self-stretch bg-gray-700 hover:text-indigo-300 text-gray-300 flex items-center gap-2 justify-center p-2 bg-opacity-30 left-8 z-30 top-8 rounded-md hover:border-white border-gray-400 border-2 transition-colors ease-in-out duration-300">
            Details <ArrowRightIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default Modals;
