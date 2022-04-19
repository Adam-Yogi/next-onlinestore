import OrderAddressForm from './OrderAddressForm';

const AddressModal = ({ isShown, liftStateUp, handleBack }) => {
  return isShown ? (
    <div className="absolute bg-black bg-opacity-5 backdrop-blur-sm backdrop-filter left-0 top-0 z-30 w-screen h-full flex justify-center items-center">
      <button
        onClick={() => handleBack()}
        className="absolute top-5 left-5 text-white font-bold bg-gray-400 border-2 border-transparent bg-opacity-60 hover:bg-opacity-80 transition-all ease-in-out duration-150 backdrop-blur-md backdrop-filter p-3 rounded-3xl shadow-2xl z-50 hover:border-2 hover:border-white"
      >
        Back
      </button>
      <OrderAddressForm liftStateUp={liftStateUp} closeModal={handleBack} />
    </div>
  ) : (
    ''
  );
};

export default AddressModal;
