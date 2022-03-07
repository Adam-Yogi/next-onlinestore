import { ArrowRightIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import bookCover from '../public/images/book.jpeg';

const Modals = ({ isShown }) => {
  return isShown ? (
    <div className="p-4 fixed top-0 left-0 z-20 w-full h-full text-white bg-red flex justify-center items-center backdrop-blur-sm">
      <div className="flex flex-col overflow-scroll">
        <Image
          src={bookCover}
          width={800}
          height={800}
          objectFit="contain"
          alt="book cover"
        />

        <h1>Harry Potter</h1>
        <p>J.K Rowling</p>
        <p>Release Date : 21-07-2002</p>
        <p className="truncate">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vel
          architecto aliquid maiores provident, aperiam quia dicta deleniti,
          fugit reprehenderit ab magni totam! Hic dignissimos rerum asperiores.
          Modi distinctio est esse natus! Quidem, saepe ipsa voluptas quo, fugit
          repellendus, dolorem tenetur autem consequuntur adipisci tempora.
          Voluptatem voluptates vel eligendi quia maiores ipsam repellat, id
          ipsa sequi facere nihil, iusto quidem velit beatae nesciunt! Explicabo
          ipsam maiores vero iure, quaerat quidem ea minus, soluta cupiditate
          omnis debitis rerum modi molestiae, quia consequatur iusto veniam?
          Animi reprehenderit cumque hic numquam nobis veniam cum sit adipisci,
          autem omnis in doloribus quasi voluptatum laborum quam odit. Molestias
          numquam aperiam repellat officia dolorem rem, ex nisi, provident saepe
          maiores laboriosam neque excepturi id, inventore perspiciatis.
        </p>
        <button className="bg-gray-900 text-white flex items-center justify-center p-2 bg-opacity-50 left-8 z-30 top-8 rounded-md hover:border-white">
          Details <ArrowRightIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  ) : (
    ''
  );
};

export default Modals;
