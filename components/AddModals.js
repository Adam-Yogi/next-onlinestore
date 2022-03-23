import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import defaultCover from '../public/images/defaultcover.png';
import { Context } from '../store/AppContext';

const AddModals = ({ isShown }) => {
  const [selectedImage, setSelectedImage] = useState('');
  const [imgPreview, setImgPreview] = useState('');
  const [harga, setHarga] = useState('');
  const [nama, setNama] = useState('');
  const [jumlah, setJumlah] = useState('');
  // const [imgProduct, setImgProduct] = useState(
  //   'https://i.ibb.co/1GQz0db/defaultcover.png'
  // );

  const [deskripsi, setDeskripsi] = useState('');
  const { store, actions } = useContext(Context);
  const router = useRouter();
  const uploadBook = async () => {
    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('name', nama);

    const optsImgBB = {
      method: 'POST',
      body: formData,
    };
    const res = await fetch(
      'https://api.imgbb.com/1/upload?key=ce2e78bc2d3628361700973256143dc2',
      optsImgBB
    );
    const data = await res.json();
    const defaultCoverURL = 'https://i.ibb.co/1GQz0db/defaultcover.png';
    data.data.url && data.data.url != '' && data.data.url != undefined
      ? await actions.addBook(nama, harga, deskripsi, jumlah, data.data.url)
      : await actions.addBook(nama, harga, deskripsi, jumlah, defaultCoverURL);

    await actions.fetchUserBooks();

    router.reload();
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      var binaryData = [];
      binaryData.push(e.target.files[0]);

      setImgPreview(window.URL.createObjectURL(new Blob(binaryData)));
    }
  };

  return isShown ? (
    <div className="p-4 fixed h-screen  top-0 left-0 z-20 w-full text-white bg-gray-800 bg-opacity-50 flex justify-center items-center backdrop-blur-sm">
      <div className="flex h-full overflow-scroll flex-col md:grid md:gap-4 md:grid-cols-2  gap-1  border-white border-2 p-3 md:p-4 border-opacity-60 rounded-lg bg-[#252849] bg-opacity-90 backdrop-blur-lg">
        <div className="flex flex-col items-center justify-center rounded-md overflow-hidden w-full gap-2 ">
          <Image
            src={imgPreview || defaultCover}
            width={800}
            height={800}
            objectFit="contain"
            alt="book cover"
          />
          <div className="place-self-center flex justify-between items-center w-9/12 border-white border-opacity-20 border-2 p-2 rounded-lg md:place-self-center">
            <input
              type="file"
              accept="image/*"
              onChange={(event) => {
                imageChange(event);
                setSelectedImage(event.target.files[0]);
              }}
            />
            <button
              onClick={() => {
                setImgPreview('');
                setSelectedImage('');
              }}
              disabled={
                selectedImage != '' &&
                selectedImage != undefined &&
                selectedImage
                  ? false
                  : true
              }
              className=" disabled:bg-red-900 disabled:text-black bg-red-500 hover:bg-red-400 rounded-lg shadow-lg p-3"
            >
              Remove Image
            </button>
          </div>
        </div>
        <div className="flex flex-col px-3 md:justify-around space-y-4 md:pr-4 ">
          <div className="flex justify-center flex-col">
            <label htmlFor="nama">Title</label>
            <input
              type="text"
              placeholder="title"
              name="nama"
              className="border-black text-black w-100 border-2 rounded-xl p-3"
              value={nama}
              onChange={(e) => {
                setNama(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center flex-col">
            <label htmlFor="jumlah">Stock</label>
            <input
              type="text"
              placeholder="Current Stock"
              name="jumlah"
              className="border-black text-black w-100 border-2 rounded-xl p-3"
              value={jumlah}
              onChange={(e) => {
                setJumlah(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center flex-col">
            <label htmlFor="harga">Price</label>
            <input
              type="text"
              placeholder="Input Only the Value(no space or other symbols)"
              name="harga"
              className="border-black text-black w-100 border-2 rounded-xl p-3"
              value={harga}
              onChange={(e) => {
                setHarga(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center flex-col">
            <label htmlFor="deskripsi">Description</label>
            <textarea
              type="text"
              placeholder="Description"
              name="deskripsi"
              className="border-black text-black w-100 border-2 rounded-xl p-3 h-44"
              value={deskripsi}
              onChange={(e) => {
                setDeskripsi(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center flex-col">
            <button
              type="submit"
              className="bg-green-400 rounded-xl p-3 text-white font-bold disabled:bg-green-800 disabled:opacity-25"
              onClick={() => {
                uploadBook();
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
