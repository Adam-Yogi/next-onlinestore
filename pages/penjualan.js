import LayoutNav from '../components/LayoutNav';
import SellItem from '../components/SellItem';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../store/AppContext';

const penjualan = () => {
  const [sellerOrder, setSellerOrder] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getSellerOrder().then(() => {
      setSellerOrder(store.sellerOrder);
    });
  }, []);
  return (
    <>
      <LayoutNav>
        <div className="w-full h-full justify-center items-center flex flex-col text-white gap-3">
          {sellerOrder.length !== 0 ? (
            <>
              <h1 className="text-5xl lg:text-8xl font-bold text-center">
                Penjualan
              </h1>

              <div className="flex flex-col gap-3">
                {sellerOrder.map((item) => {
                  return <SellItem sellerOrder={item} />;
                })}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-6">
              <p className="text-3xl lg:text-5xl p-10 text-center">
                You don't have any order yet
              </p>
            </div>
          )}
        </div>
      </LayoutNav>
    </>
  );
};

export default penjualan;
