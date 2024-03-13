import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cardWidget/CartWiget';
import { NavLink } from 'react-router-dom';

function Navegacion() {
  
  return (
    <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'> Pro-Shop Tennis </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='ofertas'>Ofertas</Nav.Link>
            <Nav.Link as={NavLink} to='destacados'>Destacados</Nav.Link>
            <NavDropdown as={NavLink} to='category/producto'title="Productos" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='babolat' >Babolat</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='head'>
                Head
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='wilson'>Wilson</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget counter = {10} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;