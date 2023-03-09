import React, { useState } from 'react';
import InputField from './InputField';

const EducationInfo = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    degree: '',
    fieldOfStudy: '',
    graduationYear: '',
    percentage: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextPage = () => {
    // Save data to database and move to next page
  };

  const handlePreviousPage = () => {
    // Move to previous page
  };

  return (
    <div className="bg-green-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="School Name"
          name="schoolName"
          placeholder="Enter your School name"
          value={formData.schoolName}
          onChange={handleInputChange}
        />
        <InputField
          label="Degree"
          name="degree"
          placeholder="Enter your Degree"
          value={formData.degree}
          onChange={handleInputChange}
        />
        <InputField
          label="Field of Study"
          name="fieldOfStudy"
          placeholder="Enter your Field of Study"
          value={formData.fieldOfStudy}
          onChange={handleInputChange}
        />
        <InputField
          label="Graduation Year"
          name="graduationYear"
          placeholder="Enter your Graduation Year"
          value={formData.graduationYear}
          onChange={handleInputChange}
        />
        <InputField
          label="Percentage"
          name="percentage"
          placeholder="Enter your Percent"
          value={formData.percentage}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-between mt-8">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handlePreviousPage}
        >
          Previous
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EducationInfo;
