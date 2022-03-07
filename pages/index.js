import Container from '../components/Container';
import Modals from '../components/Modals';
import Nav from '../components/Nav';
import Thumbnail from '../components/Thumbnail';

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <Nav />
      <Container>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
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
