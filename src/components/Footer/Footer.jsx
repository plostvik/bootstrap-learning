import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <Container
    fluid
    style={{
      backgroundColor: '#212529',
      color: '#fff',
      display: 'flex',
      flex: '0 0 auto',
    }}
  >
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '30px',
        paddingBottom: '40px',
      }}
    >
      <p>&copy; Copyright plostvik 2020</p>
    </Container>
  </Container>
);

export default Footer;
