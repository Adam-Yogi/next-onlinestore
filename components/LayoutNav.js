import Footer from './Footer.js';
import Nav from './Nav.js';

const LayoutNav = (props) => {
  return (
    <>
      <div className="min-h-screen">
        <Nav user={props.user} />
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default LayoutNav;
