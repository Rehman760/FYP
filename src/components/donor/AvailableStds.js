import { useEffect, useState } from "react";
import { getAllStudents } from "../Firebase/SaveData";
// import StudentView from "../StudentView";
import ShowStudentView from "../student/ShowStudentView";

export default function AvailableStds({donorEmail}){
    const [students, setStudents] = useState([]);
    const [category, setCategory] = useState('All');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    
    useEffect(()=>{
        getAllStudents(getStudentData);
    },[]);

    const getStudentData = (students)=>{
        console.log(students[0].imageUrl);
        setStudents(students);
    }

    
    return (
        <>
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex items-center md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800">Students</h2>
            <div className="relative ml-2">
              <select
                className="block appearance-none w-full bg-white border border-green-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-300 focus:shadow-outline-green sm:text-sm"
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="All">All</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.95 7.95a.999.999 0 1 0-1.41-1.41l-3.54 3.54a.999.999 0 0 0-.29.71V16a1 1 0 1 0 2 0v-4.24l2.54-2.54z"/></svg>
              </div>
            </div>
          </div>
      
        </div>


        
        <div className="container">
            <h1 className="text-center my-3 font-medium text-3xl">{'List of all Students'}</h1>
            <div className="row">
                {students.map((student, index) => (
                    <ShowStudentView key={index} id={index} name={student.name} bio={student.schoolName} picture={student.imageUrl} status={'Not Sponsored'} email={student.email} donorEmail={donorEmail}/>
                ))}
            </div>
        </div>
        </>
    );
}