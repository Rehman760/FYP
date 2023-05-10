import { useEffect, useState } from "react";
import { getAllStudents } from "../Firebase/SaveData";
import StudentView from "../StudentView";

export default function AvailableStds(){
    const [students, setStudents] = useState([]);
    
    useEffect(()=>{
        getAllStudents(getStudentData);
    },[]);

    const getStudentData = (students)=>{
        console.log(students[0].imageUrl);
        setStudents(students);
    }

    
    return (
        <div className="container">
            <h1 className="text-center my-3 font-medium text-3xl">{'List of all Students'}</h1>
            <div className="row">
                {students.map((student, index) => (
                    // console.log(`${student.imageUrl}: image URL`)
                    <StudentView key={index} id={index} name={student.name} bio={student.schoolName} picture={student.imageUrl} status={student.gradYear} />
                ))}
            </div>
        </div>
    );
}