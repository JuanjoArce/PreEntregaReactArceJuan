import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <Logo />
        </NavLink>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            
          <NavLink exact="true" to="/" className="nav-link">Home</NavLink>

        <NavLink to="/category/celulares" className="nav-link">Celulares</NavLink>
        <NavLink to="/category/monitores" className="nav-link">Monitores</NavLink>
        <NavLink to="/category/tablets" className="nav-link">Tablets</NavLink>


          </Nav>
          <NavLink to="/cart" className="navbar-cart">
          <button className="bi bi-cart">
            <CartWidget />
            </button>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;