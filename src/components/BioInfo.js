import React from 'react';
import InputField from './InputField';

function BioInfo({ handleChange }) {
  return (
    <div className=" p-4 mb-4 rounded-lg shadow-md">
      <h2 className="text-lg font-medium mb-4">Biological Information</h2>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <InputField
            label="Blood Group"
            type="text"
            name="bloodGroup"
            placeholder="Enter blood group"
            onChange={handleChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <InputField
            label="CNIC"
            type="text"
            name="cnic"
            placeholder="Enter CNIC"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <InputField
            label="Date of Birth"
            type="date"
            name="dob"
            placeholder="Select date of birth"
            onChange={handleChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <InputField
            label="Place of Birth"
            type="text"
            name="placeOfBirth"
            placeholder="Enter place of birth"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default BioInfo;
