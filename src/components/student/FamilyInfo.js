import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { saveFamilyInfo } from "../Firebase/SaveData";
import { getFormData } from "../Firebase/SaveData";

const FamilyInfo = ({setActiveSection, activeSectionNo}) => {
  const [familyInfo, setFamilyInfo] = useState({
    fatherName:'',
    fatherOccupation:'',
    motherName:'',
    motherOccupation:'',
    annualIncome:''
  });

  useEffect(()=>{
    const email = sessionStorage.getItem('studentEmail');
    getFormData(email, function(data){
      setFamilyInfo(data?.familyInfo);
    });
  }, [])

  const handleNextPage = () => {
    // Save data to database and move to next page
    const email = sessionStorage.getItem('studentEmail');
    saveFamilyInfo(familyInfo, email);
    setActiveSection(activeSectionNo+1);
    showMe();
  };

  const handlePreviousPage = () => {
    // Move to previous page
    console.log("Previous"+activeSectionNo);
    setActiveSection(activeSectionNo-1);
  };

  const showMe = ()=>{
    console.log(familyInfo);
  }

  const handleValueChange = (e)=>{
    const key = e.target.name;
    const value = e.target.value;
    setFamilyInfo({...familyInfo, [key]:value});
  }


  return (
    <div className="bg-green-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Father's Name"
          type="text"
          placeholder="Enter your Father Name"
          name="fatherName"
          value={familyInfo?.fatherName}
          onChange={handleValueChange}
        />
        <InputField
          label="Father's Occupation"
          type="text"
          placeholder="Enter your Father Occupation"
          name="fatherOccupation"
          value={familyInfo?.fatherOccupation}
          onChange={handleValueChange}
        />
        <InputField
          label="Mother's Name"
          type="text"
          placeholder="Enter your Mother's Name"
          name="motherName"
          value={familyInfo?.motherName}
          onChange={handleValueChange}
        />
        <InputField
          label="Mother's Occupation"
          type="text"
          placeholder="Enter your Mother's Occupation"
          name="motherOccupation"
          value={familyInfo?.motherOccupation}
          onChange={handleValueChange}
        />
        <InputField
          label="Annual Income"
          type="number"
          placeholder="Enter your Annual Income"
          name="annualIncome"
          value={familyInfo?.annualIncome}
          onChange={handleValueChange}
        />
      </div>
      <div className="flex justify-between mt-8">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handlePreviousPage}
        >
          Previous
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FamilyInfo;
