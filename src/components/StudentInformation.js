import React, { useState } from "react";

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
          <h3 className="text-lg font-bold">Personal Information</h3>
          {/* Personal information form */}
        </div>
      )}
      {activeSection === 2 && (
        <div className="p-4">
          <h3 className="text-lg font-bold">Education Information</h3>
          {/* Education information form */}
        </div>
      )}
      {activeSection === 3 && (
        <div className="p-4">
          <h3 className="text-lg font-bold">Family Information</h3>
          {/* Family information form */}
        </div>
      )}
      {activeSection === 4 && (
        <div className="p-4">
          <h3 className="text-lg font-bold">Expenditure Information</h3>
          {/* Expenditure information form */}
        </div>
      )}
      {activeSection === 5 && (
        <div className="p-4">
          <h3 className="text-lg font-bold">Other Details</h3>
          {/* Other details form */}
        </div>
      )}
      </div>
  );
}
export default StudentInformation
