import Container from '../components/Container';
import Thumbnail from '../components/Thumbnail';
import LayoutNav from '../components/LayoutNav';

export default function Home(props) {
  const booksData = props.request;
  return (
    <LayoutNav user>
      <Container>
        {booksData.map((book) => (
          <Thumbnail
            key={book[0]}
            bookId={book[0]}
            imgUrl={book[5]}
            title={book[1]}
            price={book[3]}
            dateAdded={book[6]}
            available={book[4]}
          />
        ))}
      </Container>
    </LayoutNav>
  );
}

export async function getServerSideProps(context) {
  const request = await fetch('http://localhost:5000/books').then((res) =>
    res.json()
  );
  console.log(request);
  return { props: { request } };
}
