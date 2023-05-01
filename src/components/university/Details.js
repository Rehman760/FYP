import React, { useState } from 'react';

const Details = () => {
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const donors = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', amount: 100 },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', amount: 50 },
    { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com', amount: 200 },
  ];

  const students = [
    { id: 1, name: 'Alice Brown', email: 'alicebrown@example.com', program: 'Computer Science' },
    { id: 2, name: 'Tom Wilson', email: 'tomwilson@example.com', program: 'Business Administration' },
    { id: 3, name: 'Sara Lee', email: 'saralee@example.com', program: 'Nursing' },
  ];

  const programs = [
    { id: 1, name: 'Computer Science', description: 'Learn programming and software development' },
    { id: 2, name: 'Business Administration', description: 'Learn management and entrepreneurship' },
    { id: 3, name: 'Nursing', description: 'Learn healthcare and patient care' },
  ];

  const handleDonorClick = (donor) => {
    setSelectedDonor(donor);
    setSelectedStudent(null);
    setSelectedProgram(null);
  };

  const handleStudentClick = (student) => {
    setSelectedDonor(null);
    setSelectedStudent(student);
    setSelectedProgram(null);
  };

  const handleProgramClick = (program) => {
    setSelectedDonor(null);
    setSelectedStudent(null);
    setSelectedProgram(program);
  };

  return (
    <div className="bg-white text-gray-800 p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-600 text-white p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Donors</h3>
          <ul>
            {donors.map((donor) => (
              <li key={donor.id} className="mb-2 cursor-pointer" onClick={() => handleDonorClick(donor)}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">{donor.name}</p>
                    <p className="text-sm">{donor.email}</p>
                  </div>
                  <p className="font-bold">${donor.amount}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-600 text-white p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Students</h3>
          <ul>
            {students.map((student) => (
              <li key={student.id} className="mb-2 cursor-pointer" onClick={() => handleStudentClick(student)}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">{student.name}</p>
                    <p className="text-sm">{student.email}</p>
                  </div>
                  <p className="font-bold">{student.program}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-yellow-600 text-white p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Programs</h3>
          <ul>
            {programs.map((program) => (
              <li key={program.id} className="mb-2 cursor-pointer" onClick={() => handleProgramClick(program)}>
                <div>
                  <p className="font-bold">{program.name}</p>
                  <p className="text-sm">{program.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {selectedDonor && (
        <div className="bg-green-600 text-white p-4 rounded-lg mt-4">
          <h3 className="text-lg font-bold mb-2">{selectedDonor.name}</h3>
          <p className="text-sm mb-2">{selectedDonor.email}</p>
          <p className="font-bold">${selectedDonor.amount}</p>
        </div>
      )}
      {selectedStudent && (
        <div className="bg-blue-600 text-white p-4 rounded-lg mt-4">
          <h3 className="text-lg font-bold mb-2">{selectedStudent.name}</h3>
          <p className="text-sm mb-2">{selectedStudent.email}</p>
          <p className="font-bold">{selectedStudent.program}</p>
        </div>
      )}
      {selectedProgram && (
        <div className="bg-yellow-600 text-white p-4 rounded-lg mt-4">
          <h3 className="text-lg font-bold mb-2">{selectedProgram.name}</h3>
          <p className="text-sm">{selectedProgram.description}</p>
        </div>
      )}
    </div>
  );
};

export default Details;
