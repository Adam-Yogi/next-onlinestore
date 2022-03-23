import LayoutNav from '../components/LayoutNav';
import bookCoverExample from '../public/images/book.jpeg';
import AdminThumbnail from '../components/AdminThumbnail';
import Container from '../components/Container';
import { PlusIcon, ArrowLeftIcon } from '@heroicons/react/outline';
import { useState, useEffect, useContext } from 'react';
import AddModals from '../components/AddModals';
import { Context } from '../store/AppContext';

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

  return (
    <LayoutNav>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        title="add product"
        className="hover:bg-green-600 text-white z-10 fixed top-24 shadow-2xl right-4 bg-green-400 p-2 rounded-full"
      >
        <PlusIcon className="h-8 w-8" />
      </button>
      <h1 className="text-white text-2xl font-bold text-center p-3">
        {store.user.first_name + ' ' + store.user.last_name + ' '}
        PRODUCTS
      </h1>
      <p className="text-white text-xl font-semibold text-center p-3">
        Total of {userBooks.length} Products
      </p>
      {userBooks.length > 0 ? (
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
      ) : (
        <div className="flex flex-col gap-2 h-screen text-2xl font-bold text-white w-full justify-center items-center">
          <h1>You have no product yet</h1>
          <p className="text-white text-xl font-semibold text-center p-3">
            There are {userBooks.length} products in your store
          </p>
          <button
            onClick={() => {
              actions.fetchUserBooks().then(() => {
                setUserBooks(store.userBooks);
              });
            }}
            className="bg-indigo-400 hover:bg-indigo-600 text-white rounded-lg p-3 font-semibold shadow-2xl"
          >
            Fetch My Products
          </button>
        </div>
      )}
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
