import React from 'react';
import InputField from './InputField';

const FatherInfo = ({ handleChange }) => {
  return (
    <div className=" p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-medium mb-4">Father's Information</h2>
      <InputField label="Full Name" type="text" name="fatherName"  placeholder="Enter father name" onChange={handleChange}/>
      <InputField label="Occupation" type="text" name="fatherOccupation"  placeholder="Enter father occupation" onChange={handleChange}/>
      <InputField label="Phone Number" type="text" name="fatherPhone"  placeholder="Enter phone number" onChange={handleChange}/>
      <InputField label="Email" type="email" name="fatherEmail"  placeholder="Enter email" onChange={handleChange}/>
    </div>
  );
};

export default FatherInfo;
