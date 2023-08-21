import { Card, Button } from 'react-bootstrap';
import StudentView from './StudentView';

const HistoryPage = (props) => {
    const students = [
        {
            id: 1,
            name: "Abdul Rehman",
            email:'std1@gmail.com',
            bio: "Abdul Rehman is a hardworking student who is currently studying computer science at XYZ University. He is passionate about technology and wants to use his skills to help others.",
            picture: "https://via.placeholder.com/150",
            status: "sponsored"
        },
        {
            id: 2,
            name: "Ameer Hamza",
            email:'std2@gmail.com',
            bio: "Ameer is a dedicated student who is currently pursuing a degree in medicine at ABC University. He is committed to making a positive impact on her community through his profession.",
            picture: "https://via.placeholder.com/150",
            status: "sponsored"
        },
        {
            id: 3,
            name: "Shoaib Ahmed",
            email:'std3@gmail.com',
            bio: "Shoaib is a hardworking student who is currently studying computer science at XYZ University. He is passionate about technology and wants to use his skills to help others.",
            picture: "https://via.placeholder.com/150",
            status: "sponsored"
        }
        // ... more students
    ]

    return (
        <div className="container">
        <h1 className="text-center my-3 font-medium text-3xl">{props.title}</h1>
        <div className="row">
            {students.map((student, index) => (
              <StudentView key={index} id={student.id} name={student.name} bio={student.bio} picture={student.picture} status={student.status} email={student.email} />
            ))}
        </div>
    </div>
    );
}

export default HistoryPage;