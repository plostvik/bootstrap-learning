import React from 'react';
import { Container, Jumbotron as Jumbo } from 'react-bootstrap';
import image1 from '../../images/1.jpeg';
import image2 from '../../images/2.jpeg';
import image3 from '../../images/3.jpeg';
import image4 from '../../images/4.jpeg';
import image5 from '../../images/5.jpeg';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background: url(${image1}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 600px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #000;
    opacity: 0.6;
  }
`;

const Jumbotron = () => (
  <Styles>
    <Jumbo className="jumbo" fluid>
      <div className="overlay"></div>
      <Container>
        <h1>Main Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga
          laudantium odio tenetur iusto pariatur, nihil voluptatum placeat
          quibusdam repellendus natus culpa libero aut saepe illo asperiores.
          Doloribus, porro ex.
        </p>
      </Container>
    </Jumbo>
  </Styles>
);

export default Jumbotron;
