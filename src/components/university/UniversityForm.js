import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const UniversityForm = () => {
  const [university, setUniversity] = useState({
    name: '',
    address: '',
    location: '',
    number: '',
    programs: [],
  });

  const [program, setProgram] = useState('');

  const handleChange = (e) => {
    setUniversity({ ...university, [e.target.name]: e.target.value });
  };

  const handleProgramChange = (e) => {
    setProgram(e.target.value);
  };

  const addProgram = () => {
    setUniversity({ ...university, programs: [...university.programs, program] });
    setProgram('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(university);
    // Submit the form data to your API or backend
  };

  return (
    <div className="bg-white text-green-600 p-4 md:p-6 rounded-lg shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold mb-4">University Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={university.name}
            onChange={handleChange}
            className="border border-green-600 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-2">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={university.address}
            onChange={handleChange}
            className="border border-green-600 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block mb-2">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={university.location}
            onChange={handleChange}
            className="border border-green-600 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block mb-2">Number</label>
          <input
            type="text"
            id="number"
            name="number"
            value={university.number}
            onChange={handleChange}
            className="border border-green-600 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="program" className="block mb-2">Programs</label>
          <div className="flex items-center">
            <input
              type="text"
              id="program"
              name="program"
              value={program}
              onChange={handleProgramChange}
              className="border border-green-600 p-2 w-full rounded-md pr-10"
            />
            <button
              type="button"
              onClick={addProgram}
              className="absolute right-0 top-8 h-10 w-10 text-green hover:text-white bg-green-600 rounded-r-md flex items-center justify-center hover:bg-green-700 focus:outline-none focus:shadow-outline"
            >
              <FaPlus />
            </button>
          </div>
          <ul className="mt-4">
            {university.programs.map((program, index) => (
              <li key={index} className="mb-2">
                {program}
              </li>
            ))}
          </ul>
        </div>
        <button type="submit" className="bg-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UniversityForm;
