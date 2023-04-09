import React, { useState } from "react";
import InputField from "./InputField";

const FamilyInfo = ({setActiveSection, activeSectionNo, totalSections}) => {
  const [fatherName, setFatherName] = useState("");
  const [fatherOccupation, setFatherOccupation] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherOccupation, setMotherOccupation] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");

  const handleNextPage = () => {
    // Save data to database and move to next page
    setActiveSection(activeSectionNo+1);
    // showMe();
  };

  const handlePreviousPage = () => {
    // Move to previous page
    console.log("Previous"+activeSectionNo);
    setActiveSection(activeSectionNo-1);
  };




  return (
    <div className="bg-green-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Father's Name"
          type="text"
          placeholder="Enter your Father Name"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
        />
        <InputField
          label="Father's Occupation"
          type="text"
          placeholder="Enter your Father Occupation"
          value={fatherOccupation}
          onChange={(e) => setFatherOccupation(e.target.value)}
        />
        <InputField
          label="Mother's Name"
          type="text"
          placeholder="Enter your Mother's Name"
          value={motherName}
          onChange={(e) => setMotherName(e.target.value)}
        />
        <InputField
          label="Mother's Occupation"
          type="text"
          placeholder="Enter your Mother's Occupation"
          value={motherOccupation}
          onChange={(e) => setMotherOccupation(e.target.value)}
        />
        <InputField
          label="Annual Income"
          type="number"
          placeholder="Enter your Annual Income"
          value={annualIncome}
          onChange={(e) => setAnnualIncome(e.target.value)}
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
