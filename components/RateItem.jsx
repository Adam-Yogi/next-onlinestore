import { useState, useContext } from 'react';

import StarRatings from 'react-star-ratings';
import { Context } from '../store/AppContext';

const RateItem = ({ product, orderID }) => {
  const [rating, setRating] = useState(3); // initial rating value
  const { store, actions } = useContext(Context);
  console.log(product);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };
  const handleSubmit = () => {
    actions.rateProduct(orderID, product.productID, rating);
  };
  return (
    <div className="grid grid-cols-3 min-w-full items-center">
      <div className="">
        <p className="inline">{product.nama}</p>
        <p className="inline text-xs text-opacity-50 text-gray-500">
          {' '}
          ID:{product.productID}
        </p>
      </div>

      <div className="">
        {product.isRated === 0 ? (
          <StarRatings
            rating={rating}
            starRatedColor="#e3c654"
            starDimension="17px"
            changeRating={handleRating}
            starHoverColor="yellow"
            starSpacing="1px"
            numberOfStars={5}
            name="rating"
          />
        ) : (
          <p className="text-gray-300">Telah dinilai</p>
        )}
      </div>
      <div>
        {product.isRated === 0 && (
          <button
            onClick={() => {
              handleSubmit();
            }}
            className=" bg-gradient-to-r hover:bg-gradient-to-l from-purple-600 to-indigo-600 p-0.5 md:p-1 rounded-lg text-white font-roboto font-bold min-w-fit border-2 border-transparent hover:border-2 border-opacity-80 hover:border-purple-100 transition-all ease-in-out duration-150"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default RateItem;
