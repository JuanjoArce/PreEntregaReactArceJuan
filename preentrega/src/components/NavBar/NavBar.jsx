import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand to="/"><Logo/></Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className='pestaña'>Home</Link>
            <Link to="categoria/celulares" className='pestaña'>Celulares</Link>
            <Link to="categoria/monitores" className='pestaña'>Monitores</Link>
            <Link to="categoria/tablets" className='pestaña'>Tablets</Link>
            
          </Nav>
          <Link to="/cart"><CartWidget/></Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;