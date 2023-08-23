import React from 'react';
import { Row, Col, Card, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Universities = [
  {
    id: 1,
    name: "University of Oxford",
    description:
      "Oxford is a world-leading centre of learning, teaching, and research and the oldest university in the English-speaking world.",
    image:
      "https://dummyimage.com/300x200/000/fff&text=University+of+Oxford",
  },
  {
    id: 2,
    name: "Harvard Institute of Technology",
    description:
      "Harvest Institute of Technology provides excellent education in the field of technology and has a strong reputation in the industry.",
    image:
      "https://dummyimage.com/300x200/000/fff&text=Harvest+Institute+of+Technology",
  },
  {
    id: 3,
    name: "MIT",
    description:
      "The Massachusetts Institute of Technology is a private research university located in Cambridge, Massachusetts.",
    image: "https://dummyimage.com/300x200/000/fff&text=MIT",
  },
];

const UniversityPage = () => {
  const handleAddUniversity = () => {
    // Add your logic for adding a university here
    console.log('Add university clicked');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-3xl font-medium">Our Universities</h2>
      <Row className="mb-3">
        <Col xs={12} sm={12}>
          <button
            className="btn btn-success float-end"
            onClick={handleAddUniversity}
          >
            <NavLink to={'/universityLogin'}>
              Add University
            </NavLink>
          </button>
        </Col>
      </Row>
      {Universities.map((university, index) => (
        <Row key={index} className="mb-3">
          <Col xs={12} sm={12}>
            <Card>
              <Card.Body>
                <Row>
                  <Col xs={12} sm={8}>
                    <h2 className='text-3xl font-medium'>{university.name}</h2>
                    <p>{university.description}</p>
                  </Col>
                  <Col xs={12} sm={4}>
                    <Image src={university.image} fluid />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default UniversityPage;
