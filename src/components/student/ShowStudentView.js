import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ShowStudentView({id,email, picture,name,bio,status}) {
  return (
    <div className="col-sm-4 my-2" key={id}>
    <Card>
        <div className="text-center">
            <Card.Img variant="top" src={picture} style={{ height: '250px' }} />
        </div>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{bio}</Card.Text>
                <Card.Text className="text-muted">Graduation Year: {status}</Card.Text>
            <Button variant="success" style={{background:'green'}}>
                <Link to={`/donor/student/${id}`} state={{stdEmail:{email}, stdImgUrl:{picture}}}>View Profile</Link>
            </Button>
        </Card.Body>
    </Card>
</div>
  )
}

export default  ShowStudentView