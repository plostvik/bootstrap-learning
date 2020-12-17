import React, { useState } from 'react';
import { Nav, Navbar, Button, Modal, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);
  const onOpen = () => setShow(true);

  return (
    <>
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
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contacts">Contacts</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Button onClick={onOpen} variant="primary" className="mr-3">
                Sign in
              </Button>
              <Button variant="primary">Sign out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
              <Form.Text>Description</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
              <Form.Text>Description</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
              <Form.Text>Description</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Control type="checkbox" />
              <Form.Text>I agree</Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavBar;
