import React, { useState } from "react";
import EducationInfo from "./EducationInfo";
import ExpendituresInfo from "./ExpendituresInfo";
import FamilyInfo from "./FamilyInfo";
import OtherDetails from "./OtherDetails";
import PersonalInfo from "./PersonalInfo";

const StudentInformation = () => {
  const [activeSection, setActiveSection] = useState(1);

  const getActiveSection = (number)=>{
    setActiveSection(number);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col md:flex-row justify-between border-b border-gray-300 py-2">
        <div
          className={`w-full md:w-1/5 text-center cursor-pointer ${
            activeSection === 1 ? "font-bold text-green-500" : ""
          }`}
          onClick={() => setActiveSection(1)}
        >
          Personal Information
        </div>
        <div
          className={`w-full md:w-1/5 text-center cursor-pointer ${
            activeSection === 2 ? "font-bold text-green-500" : ""
          }`}
          onClick={() => setActiveSection(2)}
        >
          Education Information
        </div>
        <div
          className={`w-full md:w-1/5 text-center cursor-pointer ${
            activeSection === 3 ? "font-bold text-green-500" : ""
          }`}
          onClick={() => setActiveSection(3)}
        >
          Family Information
        </div>
        <div
          className={`w-full md:w-1/5 text-center cursor-pointer ${
            activeSection === 4 ? "font-bold text-green-500" : ""
          }`}
          onClick={() => setActiveSection(4)}
        >
          Expenditure Information
        </div>
        <div
          className={`w-full md:w-1/5 text-center cursor-pointer ${
            activeSection === 5 ? "font-bold text-green-500" : ""
          }`}
          onClick={() => setActiveSection(5)}
        >
          Other Details
        </div>
      </div>
      <div className="p-4">
        {activeSection === 1 && <PersonalInfo setActiveSection={getActiveSection} activeSectionNo={activeSection} />}
        {activeSection === 2 && <EducationInfo setActiveSection={getActiveSection} activeSectionNo={activeSection} />}
        {activeSection === 3 && <FamilyInfo setActiveSection={getActiveSection} activeSectionNo={activeSection} />}
        {activeSection === 4 && <ExpendituresInfo setActiveSection={getActiveSection} activeSectionNo={activeSection} />}
        {activeSection === 5 && <OtherDetails setActiveSection={getActiveSection} activeSectionNo={activeSection} />}
      </div>
    </div>
  );
};

export default StudentInformation;
