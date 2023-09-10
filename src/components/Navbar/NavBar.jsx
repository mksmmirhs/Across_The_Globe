import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className="ms-5">
          <img src="../../../public/whole.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form
            className="position-relative mx-auto"
            style={{ width: '360px' }}
          >
            <Form.Control
              type="search"
              placeholder="Search for your favorite groups in ATG"
              className="me-2 rounded-pill ps-5"
              aria-label="Search"
            />
            <FaSearch className="position-absolute top-50 start-0 translate-middle-y mx-2"></FaSearch>
          </Form>
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className="d-flex justify-content-center align-items-center me-5">
              <span>
                Create account. <span className="text-primary">It’s free!</span>
              </span>
              <IoMdArrowDropdown></IoMdArrowDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
