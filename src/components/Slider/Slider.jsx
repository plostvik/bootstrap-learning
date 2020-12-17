import React from 'react';
import image1 from '../../images/1.jpeg';
import image2 from '../../images/2.jpeg';
import image3 from '../../images/3.jpeg';
import image4 from '../../images/4.jpeg';
import image5 from '../../images/5.jpeg';
import { Carousel } from 'react-bootstrap';

const images = [image1, image2, image3, image4, image5];

const Slider = props => (
  <Carousel>
    {images.map((el, index) => (
      <Carousel.Item key={index} style={{ height: '500px' }}>
        <img src={el} alt={`img${index}`} className="d-block w-10" />
        <Carousel.Caption>
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eum
            quae consequatur minima non qui repellat quos dolorem nisi
            aspernatur corporis praesentium cumque nihil nobis ipsum amet, sit
            animi odit laudantium minus similique beatae placeat ex. Unde
            quisquam est ratione, voluptatibus ab necessitatibus nulla modi vero
            in. Repellendus, tenetur ullam?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default Slider;
