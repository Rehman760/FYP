import React, { useEffect, useState } from 'react';
import { addNewMessage, getAllStudents, setStudentStatus } from '../Firebase/SaveData';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const AllowStudents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  useEffect(function(){
    const uniName = sessionStorage.getItem('universityName');
    getAllStudents(uniName,setData);
  }, [])

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAllow = (e)=>{
    e.preventDefault();
    const index = Number(e.target.name)-1;
    const email = data[index]?.email
    console.log('Student EMAILS', data[index]?.email);
    setStudentStatus(true, email);
    addNewMessage(email, 'Your request has been accepted by the university.', 'Your request has been denied by the university.')
    
  }
  const handleDeny = (e)=>{
    e.preventDefault();
    const index = Number(e.target.name)-1;
    const email = data[index]?.email
    console.log('Student EMAILS', email);
    setStudentStatus(false, email);
    addNewMessage(email, 'Your request has been denied by the university.', 'Your request has been accepted by the university.')

  }

  return (
    <div className="p-6">
    <h2 className="text-xl font-bold text-center mb-4">Select Students</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border rounded-lg shadow-md bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2" colSpan="6">
              <div className="flex mb-4">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <FaSearch className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by name, institution, or city"
                    className="w-full p-2 border rounded pr-10"
                    onChange={e => setSearchTerm(e.target.value)}
                  />
              
                </div>
              </div>            
            </th>
          </tr>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Institution</th>
            <th className="px-4 py-2">Passing Year</th>
            <th className="px-4 py-2">City</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id} className="odd:bg-gray-100">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.schoolName}</td>
              <td className="px-4 py-2">{item.gradYear}</td>
              <td className="px-4 py-2">{item.city}</td>
              <td className="px-4 py-2">{item.status}</td>
              <td className="px-4 py-2 space-x-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                  <Link to={`/donor/student/${item.id}`} state={{stdEmail:item.email}}>View Profile</Link>
                </button>
                <button name={item.id} onClick={handleAllow} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
                  Allow
                </button>
                <button name={item.id} onClick={handleDeny} className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded">Deny</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default AllowStudents;
