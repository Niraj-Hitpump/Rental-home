import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <Navbar className="footer bg-blue-300 relative">
      <Container>
        <Row className="w-full">
          <Col md={4} className="mb-3">
            <Navbar.Brand href="#home" className="mb-2 text-xl font-semibold">Company HITPUMP</Navbar.Brand>
            <p className="text-gray-900">133203,Mullana,MMDU-Hostel</p>
            <p className="text-gray-900">Email: nirjkumarprajapati@gmail.com</p>
            <p className="text-gray-900">Phone: (+91) 7480951583</p>
          </Col>
          
          <Col md={4} className="mb-3">
            <h5 className="text-black text-xl font-semibold mx-1">Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-gray-900">Home</Nav.Link>
              <Nav.Link href="#about" className="text-gray-900">About Us</Nav.Link>
              <Nav.Link href="#services" className="text-gray-900">Services</Nav.Link>
              <Nav.Link href="#contact" className="text-gray-900">Contact</Nav.Link>
            </Nav>
          </Col>
          
          <Col md={4} className="mb-3">
            <h5 className="text-black text-xl font-semibold mx-2">Follow Us</h5>
            <Nav className="flex space-x-4">
              <Nav.Link href="https://facebook.com" className="text-gray-900 text-xl">
                <FaFacebookF />
              </Nav.Link>
              <Nav.Link href="https://twitter.com" className="text-gray-900 text-xl">
                <FaTwitter />
              </Nav.Link>
              <Nav.Link href="https://linkedin.com" className="text-gray-900 text-xl">
                <FaLinkedinIn />
              </Nav.Link>
              <Nav.Link href="https://instagram.com" className="text-gray-900 text-xl">
                <FaInstagram />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-center w-full h-16 bg-blue-400">
          <p className="mb-0 text-center font-medium">© 2024 Company Name. All rights reserved.</p>
        </div>
      </Container>
    </Navbar>
  );
}

export default Footer;
