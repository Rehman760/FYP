import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { saveOtherInfo, getFormData } from "../Firebase/SaveData";


const OtherDetails = ({setActiveSection, activeSectionNo}) => {
  const [formData, setFormData] = useState({
    interests:'',
    achievements:'',
    hobbies:''
  })
  const [isEdit, setIsEdit] = useState(false);


  useEffect(()=>{
    const email = sessionStorage.getItem('studentEmail');
    getFormData(email, function(data){
      setFormData(data?.otherInfo);
    });
  }, [])


  const handleValueChange = (e)=>{
    setIsEdit(true);
    const key = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [key]:value});
  }

  const handleSavePage = () => {
    // Save data to database and move to next page
    if(isEdit){
      const email = sessionStorage.getItem('studentEmail');
      saveOtherInfo(formData, email);
      alert("Data is saved to the database");
    }
  };

  const handlePreviousPage = () => {
    // Move to previous page
    console.log("Previous"+activeSectionNo);
    setActiveSection(activeSectionNo-1);
  };

  
  return (
    <div className="bg-green-50 py-8 px-4 sm:px-6 lg:px-8">
    <p className="mt-1 text-sm text-gray-500">
      Please enter your interests, achievements and hobbies  for the following items.
    </p>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <InputField
            label="Interests"
            type="text"
            placeholder="Enter your interests"
            name={"interests"}
            value={formData?.interests}
            onChange={handleValueChange}
          />
        </div>
        <div>
          <InputField
            label="Achievements"
            type="text"
            placeholder="Enter your achievements"
            name={"achievements"}
            value={formData?.achievements}
            onChange={handleValueChange}
          />
        </div>
      </div>
      <div className="mt-6">
        <InputField
          label="Hobbies"
          type="text"
          placeholder="Enter your hobbies"
          name={"hobbies"}
          value={formData?.hobbies}
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
          onClick={handleSavePage}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default OtherDetails;
