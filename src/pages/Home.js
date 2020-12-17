import React from 'react';
import Slider from '../components/Slider';
import Jumbotron from '../components/Jumbotron';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import image1 from '../images/1.jpeg';
import image2 from '../images/2.jpeg';
import image3 from '../images/3.jpeg';
import image4 from '../images/4.jpeg';
import image5 from '../images/5.jpeg';

export default function Home() {
  return (
    <>
      <Slider />
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row style={{ marginBottom: '2rem' }}>
          <Col>
            <Card>
              <Card.Img src={image1} alt="lalala" variant="top" />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Description</Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src={image2} alt="lalala" variant="top" />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Description</Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src={image3} alt="lalala" variant="top" />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Description</Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ background: 'tomato', padding: '2rem' }}>
          <Col md={4}>
            <img src={image4} alt="" height={200} />
          </Col>
          <Col md={8}>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              laudantium? Alias delectus, saepe cum animi non nostrum maiores ad
              quas cupiditate reiciendis repudiandae sit totam, quasi
              perferendis dignissimos tenetur eius minus blanditiis hic. Aperiam
              aspernatur voluptates delectus error, molestiae, a nihil aliquam
              sequi architecto incidunt, blanditiis recusandae aliquid assumenda
              libero!
            </p>
          </Col>
        </Row>
      </Container>
      <Jumbotron />
    </>
  );
}
