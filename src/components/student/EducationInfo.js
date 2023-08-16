import React, { useEffect, useState } from 'react';
import InputField from './InputField';
import { saveEducationInfo } from '../Firebase/SaveData';
import { getFormData } from '../Firebase/SaveData';

const EducationInfo = ({setActiveSection, activeSectionNo}) => {
  const [formData, setFormData] = useState({
    schoolName:'',
    degree:'',
    fieldOfStudy:'',
    graduationYear:'',
    percentage:''
  });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(()=>{
    const email = sessionStorage.getItem('studentEmail');
    getFormData(email, function(data){
      setFormData(data?.educationInfo);
    });
  }, []);


  const handleNextPage = () => {
    // Save data to database and move to next page
    if(isEdit){
      const email = sessionStorage.getItem('studentEmail');
      saveEducationInfo(formData, email);
    }
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

  const handleValueChange = (e)=>{
    setIsEdit(true);
    const key = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [key]:value});
  }

  return (
    <div className="bg-green-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="School Name"
          name="schoolName"
          value={formData?.schoolName}
          placeholder="Enter your School name"
          onChange={handleValueChange}
        />
        <InputField
          label="Degree"
          name="degree"
          value={formData?.degree}
          placeholder="Enter your Degree"
          onChange={handleValueChange}
        />
        <InputField
          label="Field of Study"
          name="fieldOfStudy"
          value={formData?.fieldOfStudy}
          placeholder="Enter your Field of Study"
          onChange={handleValueChange}
        />
        <InputField
          label="Graduation Year"
          name="graduationYear"
          value={formData?.graduationYear}
          placeholder="Enter your Graduation Year"
          onChange={handleValueChange}
        />
        <InputField
          label="Percentage"
          name="percentage"
          value = {formData?.percentage}
          placeholder="Enter your Percent"
          onChange={handleValueChange}
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
          {isEdit ? 'Save & Next' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default EducationInfo;
