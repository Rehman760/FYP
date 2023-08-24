import React, {useState, useEffect} from 'react'
import StudentView from './StudentView';
import { getLandPageData } from './Firebase/SaveData';


function Donors(props) {
  const [students, setStudents] = useState([]);
  
  useEffect(()=>{
      getLandPageData('student', setStudents);
  }, [])

  return (
      <div className="container">
        <h1 className="text-center my-3 font-medium text-3xl">{props.title}</h1>
        <div className="row">
            {students.map((student, index) => (
              <StudentView key={index} id={student.id} name={student.name} bio={student.bio} picture={student.picture} status={student.status} email={student.email} role={'donor'}/>
            ))}
        </div>
      </div>
  )
  

}

export default Donors