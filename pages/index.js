import Container from '../components/Container';
import Modals from '../components/Modals';
import Nav from '../components/Nav';
import Thumbnail from '../components/Thumbnail';

export default function Home() {
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
