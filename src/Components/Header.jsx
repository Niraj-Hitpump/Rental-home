import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-blue-400">
      <Container>
        <Navbar.Brand href="#home" className='text-3xl font-semibold'>HITPUMP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='text-xl font-semibold'>Home</Nav.Link>
            <Nav.Link href="#services" className='text-xl font-semibold'>Services</Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown" className='text-xl font-semibold '>
            <div className="custom-dropdown-menu">
                <NavDropdown.Item href="#action/3.1">Owners</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Brokers</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Boy Student</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Girl Student</NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
