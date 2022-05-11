import Container from '../components/Container';
import Thumbnail from '../components/Thumbnail';
import LayoutNav from '../components/LayoutNav';
import { useEffect, useContext, useState } from 'react';
import { Context } from '../store/AppContext';
import Image from 'next/image';
import hero from '../public/images/hero.jpg';
import mode from '../mode';

export default function Home(props) {
  // const { store, actions } = useContext(Context);
  // const [booksData, setBooksData] = useState([]);
  // useEffect(() => {
  //   actions.fetchBooks().then(() => {
  //     setBooksData(store.books);
  //   });
  // }, []);
  const { store, actions } = useContext(Context);
  const booksData = props.request;

  return (
    <LayoutNav user>
      <div className="items-center flex w-100 p-6 bg-cover shadow-2xl md:h-56 h-48 bg-hero-pattern bg-no-repeat m-3 md:mx-36 lg:mx-48 rounded-lg">
        <h1 className="capitalize font-roboto font-bold text-white text-4xl md:text-6xl">
          Welcome back {store.user.nama}!
        </h1>
      </div>
      {booksData.length != 0 ? (
        <Container>
          {booksData.map((book) => (
            <Thumbnail
              key={book.productID}
              bookId={book.productID}
              imgUrl={book.image_product}
              title={book.nama}
              price={book.harga}
              dateAdded={book.tgl_input}
              available={book.jumlah}
            />
          ))}
        </Container>
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <h1 className="animate-bounce text-4xl text-white font-semibold">
            Loading...
          </h1>
        </div>
      )}
    </LayoutNav>
  );
}
// http://127.0.0.1:5000
export async function getServerSideProps(context) {
  const request = await fetch(`${mode.backend_url_ip}books`).then((res) =>
    res.json()
  );

  return { props: { request } };
}
