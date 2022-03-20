import Container from '../components/Container';
import Thumbnail from '../components/Thumbnail';
import LayoutNav from '../components/LayoutNav';
import { useEffect, useContext, useState } from 'react';
import { Context } from '../store/AppContext';

export default function Home(props) {
  const { store, actions } = useContext(Context);
  const [booksData, setBooksData] = useState([]);
  useEffect(() => {
    actions.fetchBooks().then(() => {
      setBooksData(store.books);
    });
  }, []);

  return (
    <LayoutNav user>
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

// export async function getInitialProps(context) {
//   const request = await fetch('http://localhost:5000/books').then((res) =>
//     res.json()
//   );

//   return { props: { request } };
// }
