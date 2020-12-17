import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const NavBar = props => (
  <Navbar
    className="NavBarWrapper"
    collapseOnSelect
    expand="lg"
    bg="dark"
    variant="dark"
  >
    <Container>
      <Navbar.Brand>LOGO</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Contacts</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="primary" className="mr-3">
            Sign in
          </Button>
          <Button variant="primary">Sign out</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
