import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import serviceImg from './images/service.jpg';
import donorImg from './images/donor.jpg';
import paymentImg from './images/payment.jpg';


const Services = () => {
  return (
    <section id="services">
      <Container>
        <h2 className="text-center my-5 text-3xl font-medium">Our Services</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow-lg p-3 mb-5 bg-white rounded">
              <Card.Img variant="top" src={serviceImg} className="card-img" />
              <Card.Body>
                <Card.Title className="text-center">Student Registration</Card.Title>
                <Card.Text className="text-justify">
                  We provide a platform for needy students to register and showcase their academic and personal details to potential donors.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-lg p-3 mb-5 bg-white rounded">
              <Card.Img variant="top" src={donorImg} className="card-img" />
              <Card.Body>
                <Card.Title className="text-center">Donor Matching</Card.Title>
                <Card.Text className="text-justify">
                  We match the registered students with potential donors based on their financial needs, academic achievements, and personal background.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-lg p-3 mb-5 bg-white rounded">
              <Card.Img variant="top" src={paymentImg} className="card-img" />
              <Card.Body>
                <Card.Title className="text-center">Payment Processing</Card.Title>
                <Card.Text className="text-justify">
                  We handle the payment processing for the donors and make sure that the funds reach the students in a timely and secure manner.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
