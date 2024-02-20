// NavBar.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import SearchComponent from './SearchComponent';
import allData from './allData.js';

function NavBar() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Navbar expand="lg" style={navbarStyle}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src="../logo.png"
            style={{ width: '110px', height: '50px', margin: 'auto 1em' }}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/maths">
                Maths Quizzes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/timelimit">
                Time Limit Quizzes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/fun">
                Fun Quizzes
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/privacy">
              Privacy Policy
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <SearchComponent data={allData} onSearch={handleSearch} />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const navbarStyle = {
  boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
};

export default NavBar;
