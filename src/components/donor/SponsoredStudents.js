import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { getStudentsDonated } from '../Firebase/SaveData';

const SponsoredStudent = ({donorEmail}) => {
    const [students, setStudents] = useState();
  
  useEffect(function(){
    getStudentsDonated(donorEmail, function(students){
        console.log(students)
        setStudents(students);
    });

  },[]);

  return (
    <Table responsive bordered hover>
      <thead>
        <tr className="bg-green-500 text-white">
          <th>Student Name</th>
          <th>University</th>
          <th>Program</th>
          <th>Sponsored</th>
        </tr>
      </thead>
      <tbody>
        {students?.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>${student.schoolName}</td>
            <td>{student.program}</td>
            <td>
              {student.status === "approved" ? (
                <FaCheckCircle className="text-green-500" />
              ) : student.status === "pending" ? (
                <FaTimesCircle className="text-yellow-500" />
              ) : (
                <FaTimesCircle className="text-red-500" />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SponsoredStudent;

/**
 * const students = [
    {
      id: 1,
      name: "John Doe",
      amount: 500,
      studentName: "Abdul Rehman",
      status: "approved"
    },
    {
      id: 2,
      name: "Jane Smith",
      amount: 250,
      studentName: "Ameer Hamza",
      status: "pending"
    },
    {
      id: 3,
      name: "Tom Brown",
      amount: 100,
      studentName: "Shoaib Ahmed",
      status: "rejected"
    },
    {
      id: 4,
      name: "Mary Johnson",
      amount: 750,
      studentName: "Ali Ahmed",
      status: "approved"
    }
  ];

 */
