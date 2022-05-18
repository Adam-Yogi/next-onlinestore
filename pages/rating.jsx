import { useEffect, useState, useContext } from 'react';
import LayoutNav from '../components/LayoutNav';
import { Context } from '../store/AppContext';
import RateItem from '../components/RateItem';

const rating = (props) => {
  const orderID = props.query.orderID;

  const [products, setProducts] = useState([]);
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getOrderById(orderID).then(() => {
      setProducts(store.buyerRatingProducts);
    });
  }, []);

  return (
    <LayoutNav>
      <div className="md:p-3">
        <div className="bg-black min-w-full md:border-2 md:border-purple-200 text-white bg-opacity-70 shadow-lg md:rounded-md backdrop-blur-lg backdrop-filter place-self-center">
          <div className="grid grid-cols-3 items-center justify-evenly flex-col p-3">
            <div className="col-span-2">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold font-roboto">
                Order ID : {orderID}
              </p>
            </div>

            <div className="flex gap-2 md:gap-3 justify-evenly items-center"></div>
          </div>
          <div className="md:mx-3  bg-indigo-900 bg-opacity-60 p-3 mt-2 md:mb-3 md:rounded-md ">
            <div className="pb-2 space-y-1">
              <p className="font-bold">Beri Penilaian Pesanan : </p>
              <div className="grid grid-cols-3 min-w-full font-semibold">
                <p className="">Item</p>

                <p>Rate</p>
              </div>
            </div>
            <div className="flex gap-1 flex-col">
              {products.map((item, index) => (
                <RateItem key={index} product={item} orderID={orderID} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutNav>
  );
};

export default rating;

export async function getServerSideProps(context) {
  const { query } = context;

  return { props: { query } };
}
