import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg-lg="light" bg-sm="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="#home"><img src="./images/logo.jpg" alt="" width="100" height="50" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#Quote-Order" className='nav-link active'>Request a Quote/Order</Nav.Link>
            <Nav.Link href="#Help">Help</Nav.Link>
            <Nav.Link href="#CSR-Account">CSR Account #</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;