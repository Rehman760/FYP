import React from 'react';
import { Table } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const StudentTable = () => {
  const donors = [
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

  return (
    <Table responsive bordered hover>
      <thead>
        <tr className="bg-green-500 text-white">
          <th>Donor Name</th>
          <th>Amount</th>
          <th>Student Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {donors.map((donor) => (
          <tr key={donor.id}>
            <td>{donor.name}</td>
            <td>${donor.amount}</td>
            <td>{donor.studentName}</td>
            <td>
              {donor.status === "approved" ? (
                <FaCheckCircle className="text-green-500" />
              ) : donor.status === "pending" ? (
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

export default StudentTable;
