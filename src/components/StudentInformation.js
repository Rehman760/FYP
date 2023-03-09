import React, { useState } from "react";
import EducationInfo from "./EducationInfo";
import ExpendituresInfo from "./ExpendituresInfo";
import FamilyInfo from "./FamilyInfo";
import OtherDetails from "./OtherDetails";
import PersonalInfo from "./PersonalInfo";

const StudentInformation = () => {
  const [activeSection, setActiveSection] = useState(1);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between border-b border-gray-300 py-2">
        <div
          className={`w-1/5 text-center cursor-pointer ${
            activeSection === 1 ? "font-bold text-green-500" : ""
          }`}
          onClick={() => setActiveSection(1)}
        >
          Personal Information
        </div>
        <div
          className={`w-1/5 text-center cursor-pointer ${
            activeSection === 2 ? "font-bold text-green-500" : ""
          }`}
          onClick={() => setActiveSection(2)}
        >
          Education Information
        </div>
        <div
          className={`w-1/5 text-center cursor-pointer ${
            activeSection === 3 ? "font-bold text-green-500" : ""
          }`}
          onClick={() => setActiveSection(3)}
        >
          Family Information
        </div>
        <div
          className={`w-1/5 text-center cursor-pointer ${
            activeSection === 4 ? "font-bold text-green-500" : ""
          }`}
          onClick={() => setActiveSection(4)}
        >
          Expenditure Information
        </div>
        <div
          className={`w-1/5 text-center cursor-pointer ${
            activeSection === 5 ? "font-bold text-green-500" : ""
          }`}
          onClick={() => setActiveSection(5)}
        >
          Other Details
        </div>
      </div>
      {activeSection === 1 && (
        <div className="p-4">
         <PersonalInfo />
        </div>
      )}
      {activeSection === 2 && (
        <div className="p-4">
       <EducationInfo />
        </div>
      )}
      {activeSection === 3 && (
        <div className="p-4">
          <FamilyInfo />
        </div>
      )}
      {activeSection === 4 && (
        <div className="p-4">
      <ExpendituresInfo />
        </div>
      )}
      {activeSection === 5 && (
        <div className="p-4">
         <OtherDetails />
        </div>
      )}
      </div>
  );
}
export default StudentInformation
