import React from 'react';
import { Card, Button } from 'react-bootstrap';

const HistoryPage = (props) => {
    const students = [
        {
            id: 1,
            name: "Abdul Rehman",
            bio: "Abdul Rehman is a hardworking student who is currently studying computer science at XYZ University. He is passionate about technology and wants to use his skills to help others.",
            picture: "https://via.placeholder.com/150",
            sponsoredBy: "Jane Smith"
        },
        {
            id: 2,
            name: "Ameer Hamza",
            bio: "Ameer is a dedicated student who is currently pursuing a degree in medicine at ABC University. She is committed to making a positive impact on her community through her profession.",
            picture: "https://via.placeholder.com/150",
            sponsoredBy: "John Doe"
        },
        {
            id: 1,
            name: "Shoaib Ahmed",
            bio: "Shoaib is a hardworking student who is currently studying computer science at XYZ University. He is passionate about technology and wants to use his skills to help others.",
            picture: "https://via.placeholder.com/150",
            sponsoredBy: "Jane Smith"
        }
        // ... more students
    ]

    return (
        <div className="container">
        <h1 className="text-center my-3 font-medium text-3xl">{props.title}</h1>
        <div className="row">
            {students.map((student) => (
                <div className="col-sm-4 my-2" key={student.id}>
                    <Card>
                        <div className="text-center">
                            <Card.Img variant="top" src={student.picture} style={{ height: '250px' }} />
                        </div>
                        <Card.Body>
                            <Card.Title>{student.name}</Card.Title>
                            <Card.Text>{student.bio}</Card.Text>
                            <Card.Text className="text-muted">Sponsored by: {student.sponsoredBy}</Card.Text>
                            <Button variant="success" href={`/student/${student.id}`}>View Profile</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    </div>
    );
}

export default HistoryPage;
