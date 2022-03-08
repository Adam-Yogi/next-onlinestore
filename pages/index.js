import Container from '../components/Container';
import Thumbnail from '../components/Thumbnail';

export default function Home(props) {
  const booksData = props.request;
  return (
    <div>
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
    </div>
  );
}

export async function getStaticProps(context) {
  const request = await fetch('http://localhost:5000/books').then((res) =>
    res.json()
  );
  return { props: { request } };
}
