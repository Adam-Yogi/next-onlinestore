import Image from 'next/image';
import { useState } from 'react';
import Modals from './Modals';
import StarRatings from 'react-star-ratings';

const Thumbnail = ({
  bookId,
  imgUrl,
  title,
  price,
  dateAdded,
  available,
  rating,
}) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="border group hover:border-opacity-100 cursor-pointer border-white border-opacity-25 rounded-lg text-white p-3 transition-all ease-in-out duration-300"
      >
        <div className="overflow-hidden mb-2 backdrop-blur-xl bg-white bg-opacity-5 rounded-md">
          <Image
            src={imgUrl}
            width={800}
            height={800}
            alt="book cover"
            layout="responsive"
            objectFit="contain"
          />
        </div>

        <div className="flex flex-col">
          <h2
            className={`${
              title.length > 15 && 'truncate'
            } transition-all ease-in-out duration-300 font-bold group-hover:text-yellow-300 text-2xl`}
          >
            {title}
          </h2>
          <div className="flex items-end gap-1">
            <StarRatings
              rating={Number(rating)}
              starRatedColor="#e3c654"
              starDimension="17px"
              isSelectable="false"
              isAggregateRating="true"
              starHoverColor="yellow"
              starSpacing="1px"
              numberOfStars={5}
              name="rating"
            />
            <p className="text-sm text-gray-300">{rating}</p>
          </div>

          <p
            className={`${available == 0 ? 'text-red-400' : ''} ${
              available <= 5 && available > 0 && 'animate-pulse'
            } md:text-lg group-hover:animate-pulse text-gray-300 group-hover:text-white`}
          >
            {available <= 5 ? (
              <>{available == 0 ? 'Kosong' : `${available} left`}</>
            ) : (
              'Tersedia'
            )}
          </p>
          <p className="font-semibold text-xl md:text-xl py-1 opacity-90 group-hover:opacity-100 ">
            Rp{price}
          </p>
          <hr className="w-11/12 opacity-25 transition-all ease-in-out duration-300 group-hover:opacity-100 self-center" />
          <p className="self-end pt-3 text-xs lg:text-md opacity-75">
            Added : {dateAdded}
          </p>
        </div>
      </div>
      <Modals
        isShown={showModal}
        closeModal={closeModal}
        title={title}
        imgUrl={imgUrl}
        dateAdded={dateAdded}
        available={available}
        price={price}
        bookId={bookId}
        rating={rating}
      ></Modals>
    </>
  );
};

export default Thumbnail;
