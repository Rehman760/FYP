import React from 'react'
import { Card, Button } from 'react-bootstrap';

function StudentView({id,picture,name,bio,status}) {
  return (
    <div className="col-sm-4 my-2" key={id}>
    <Card>
        <div className="text-center">
            <Card.Img variant="top" src={picture} style={{ height: '250px' }} />
        </div>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{bio}</Card.Text>
                <Card.Text className="text-muted">Status: {status}</Card.Text>
            <Button variant="success" href={`/student/${id}`}>View Profile</Button>
        </Card.Body>
    </Card>
</div>
  )
}

export default StudentView