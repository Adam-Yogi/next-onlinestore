import LayoutNav from '../components/LayoutNav';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../store/AppContext';
import { BCA, BNI, BRI } from '../components/CaraBayar';

const payment = () => {
  const [userOrder, setUserOrder] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getOrder().then(() => {
      setUserOrder(store.userOrder);
    });
  }, []);
  const renderCaraBayar = () => {
    if (userOrder.bank == 'bca') return <BCA vanumber={userOrder.vanumber} />;
    else if (userOrder.bank == 'bni')
      return <BNI vanumber={userOrder.vanumber} />;
    else if (userOrder.bank == 'bri')
      return <BRI vanumber={userOrder.vanumber} />;
  };
  return (
    <LayoutNav>
      <div className="flex gap-2 flex-col justify-center items-center w-100 h-full">
        <h1 className="text-center text-white text-5xl font-bold font-roboto my-2">
          Pembayaran
        </h1>
        <div className="grid gap-1 md:w-8/12">
          <p className="text-4xl lg:text-5xl  place-self-center text-white font-bold">
            Total Tagihan:
            <br />
            Rp439000.00
          </p>
          <p className="text-white place-self-center">
            Expires in : 23.59 20-04-2022
          </p>
        </div>
        <div>{renderCaraBayar()}</div>
      </div>
    </LayoutNav>
  );
};

export default payment;
