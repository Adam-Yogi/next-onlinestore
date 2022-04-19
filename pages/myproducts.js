import LayoutNav from '../components/LayoutNav';
import AdminThumbnail from '../components/AdminThumbnail';
import Container from '../components/Container';
import { PlusIcon, ArrowLeftIcon, RefreshIcon } from '@heroicons/react/outline';
import { useState, useEffect, useContext } from 'react';

import AddModals from '../components/AddModals';
import { Context } from '../store/AppContext';
import { useRouter } from 'next/router';

const myproducts = () => {
  // const booksData = props.request;
  const [showModal, setShowModal] = useState(false);
  const { store, actions } = useContext(Context);

  const [userBooks, setUserBooks] = useState([]);

  useEffect(() => {
    actions.fetchUserBooks().then(() => {
      setUserBooks(store.userBooks);
    });
  }, []);

  const handleLoad = () => {
    actions.fetchUserBooks().then(() => {
      setUserBooks(store.userBooks);
    });
  };

  const handleAddProduct = () => {
    if (
      !store.user.alamat ||
      !store.user.kodepos ||
      !store.user.idKota ||
      !store.user.idProvinsi ||
      !store.user.provinsi ||
      !store.user.kota
    ) {
      alert('Lengkapi alamatmu terlebih dahulu');
      router.push('/updateaddress');
    } else {
      setShowModal(true);
    }
  };

  return (
    <LayoutNav>
      <button
        onClick={() => {
          handleAddProduct();
        }}
        title="add product"
        className="hover:bg-green-600 text-white z-10 fixed top-24 shadow-2xl right-4 bg-green-400 p-2 rounded-full"
      >
        <PlusIcon className="h-8 w-8" />
      </button>
      <h1 className="text-white capitalize text-2xl font-bold text-center p-3">
        {store.user.nama + "'s"} products
      </h1>
      {userBooks.length == 0 ? (
        <p className="text-white text-2xl font-semibold text-center p-3">
          You have no products yet
        </p>
      ) : (
        ''
      )}
      {
        userBooks.length > 0 ? (
          <>
            <p className="text-white text-2xl font-semibold text-center p-3">
              Total of {userBooks.length} Products
            </p>
            <Container>
              {userBooks.map((book) => (
                <AdminThumbnail
                  key={book.productID}
                  bookId={book.productID}
                  imgUrl={book.image_product}
                  title={book.nama}
                  price={book.harga}
                  dateAdded={book.tgl_input}
                  available={book.jumlah}
                  description={book.deskripsi}
                />
              ))}
            </Container>
          </>
        ) : (
          ''
        )
        // (
        //   <div className="flex flex-col gap-2 h-screen text-2xl font-bold text-white w-full justify-center items-center">
        //     <button
        //       onClick={() => handleLoad()}
        //       className="bg-indigo-400 hover:bg-indigo-600 flex gap-2 text-white rounded-lg p-3 font-semibold shadow-2xl"
        //     >
        //       Load Products <RefreshIcon className="w-10" />
        //     </button>
        //   </div>
        // )
      }
      {showModal && (
        <button
          className="fixed bg-gray-900 text-gray-300 flex items-center justify-center p-2 bg-opacity-50 left-8 z-30 top-8 rounded-md group border-2 border-gray-400 hover:border-white hover:text-indigo-300"
          onClick={() => setShowModal(false)}
        >
          <ArrowLeftIcon className="h-8 w-8 " /> Back
        </button>
      )}
      <AddModals isShown={showModal} />
    </LayoutNav>
  );
};

export default myproducts;

// export async function getServerSideProps(context) {
//   const opts = {
//     method: 'GET',
//     headers: {
//       Authorization: 'Bearer ' sessionStorage.getItem('user_token'),
//       'Content-Type': 'application/json',
//     },
//   };
//   try {
//     const res = await fetch('http://localhost:5000/userproduct', opts);
//     const request = await res.json();
//     return { props: { request } };
//   } catch (error) {
//     console.error('there was an error fetching');
//     return null;
//   }
// }
