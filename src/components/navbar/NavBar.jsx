import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cardWidget/CartWiget';

function Navegacion() {
  
  return (
    <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> Pro-Shop Tennis </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Ofertas</Nav.Link>
            <Nav.Link href="#pricing">Destacados</Nav.Link>
            <NavDropdown title="Productos" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Babolat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Head
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Wilson</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget counter = {10} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;