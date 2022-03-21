import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import defaultCover from '../public/images/defaultcover.png';

const AddModals = ({ isShown }) => {
  const [selectedImage, setSelectedImage] = useState('');
  return isShown ? (
    <div className="p-4 fixed h-screen  top-0 left-0 z-20 w-full text-white bg-gray-800 bg-opacity-50 flex justify-center items-center backdrop-blur-sm">
      <div className="flex h-full overflow-scroll flex-col md:grid md:gap-4 md:grid-cols-2  gap-1  border-white border-2 p-3 md:p-4 border-opacity-60 rounded-lg bg-[#252849] bg-opacity-90 backdrop-blur-lg">
        <div className="flex flex-col items-center justify-center rounded-md overflow-hidden w-full gap-2 ">
          <Image
            src={defaultCover}
            width={800}
            height={800}
            objectFit="contain"
            alt="book cover"
          />
          <div className="place-self-center flex justify-between items-center w-9/12 border-white border-opacity-20 border-2 p-2 rounded-lg md:place-self-center">
            <input
              type="file"
              onChange={(event) => {
                setSelectedImage(event.target.files[0]);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col px-3 md:justify-around space-y-4 md:pr-4 ">
          <div className="flex justify-center flex-col">
            <label htmlFor="first_name">Title</label>
            <input
              type="text"
              placeholder="title"
              name="title"
              className="border-black text-black w-100 border-2 rounded-xl p-3"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center flex-col">
            <label htmlFor="available">Stock</label>
            <input
              type="text"
              placeholder="Current Stock"
              name="available"
              className="border-black text-black w-100 border-2 rounded-xl p-3"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              placeholder="Input Only the Value(no space or other symbols)"
              name="price"
              className="border-black text-black w-100 border-2 rounded-xl p-3"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center flex-col">
            <label htmlFor="price">Description</label>
            <textarea
              type="text"
              placeholder="Description"
              name="description"
              className="border-black text-black w-100 border-2 rounded-xl p-3 h-44"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center flex-col">
            <button
              type="submit"
              className="bg-green-400 rounded-xl p-3 text-white font-bold disabled:bg-green-800 disabled:opacity-25"
              onClick={() => {
                handleUpdate();
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default AddModals;
