import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function StudentView({id,picture,name,bio,status,email, role}) {

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
                {
                    role==='donor' ? <></>:<button variant='success' className="w-full h-12 font-bold  text-green-500 border border-green-100 rounded-lg hover:text-white-500 hover:bg-green-600 hover:text-white">
                    <Link to={`/donor/student/${id}`} state={{stdEmail:email}} className='success'>
                        View Profile
                    </Link>
                </button>

                }
            
        </Card.Body>
    </Card>
</div>
  )
}

export default StudentView