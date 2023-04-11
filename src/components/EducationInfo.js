import React, { useState } from 'react';
import InputField from './InputField';

const EducationInfo = ({setActiveSection, activeSectionNo}) => {
  const [formData, setFormData] = useState({});

  

  const handleNextPage = () => {
    // Save data to database and move to next page
    setActiveSection(activeSectionNo+1);
    showMe();
  };

  const handlePreviousPage = () => {
    // Move to previous page
    setActiveSection(activeSectionNo-1);
  };
  const showMe =()=>{
    console.log(formData);
  }

  return (
    <div className="bg-green-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="School Name"
          name="schoolName"
          placeholder="Enter your School name"
          onChange={(e)=>setFormData({...formData, schoolName: e.target.value})}
        />
        <InputField
          label="Degree"
          name="degree"
          placeholder="Enter your Degree"
          onChange={(e)=>setFormData({...formData, degree: e.target.value})}
        />
        <InputField
          label="Field of Study"
          name="fieldOfStudy"
          placeholder="Enter your Field of Study"
          onChange={(e)=>setFormData({...formData, fieldOfStudy: e.target.value})}
        />
        <InputField
          label="Graduation Year"
          name="graduationYear"
          placeholder="Enter your Graduation Year"
          onChange={(e)=>setFormData({...formData, graduationYear: e.target.value})}
        />
        <InputField
          label="Percentage"
          name="percentage"
          placeholder="Enter your Percent"
          onChange={(e)=>setFormData({...formData, percentage: e.target.value})}
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
