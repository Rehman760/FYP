import React from 'react';
import InputField from './InputField';

const NationalityInfo = ({ handleChange }) => {
  return (
    <div className=" p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-medium mb-4">Nationality Information</h2>
      <InputField label="Nationality" type="text" name="nationality"     placeholder="Enter Nationality" onChange={handleChange}/>
      <InputField label="Passport Number" type="text" name="passportNumber"     placeholder="Enter passport number" onChange={handleChange}/>
      <InputField label="Country of Issue" type="text" name="countryOfIssue"     placeholder="Enter country of issue"onChange={handleChange}/>
      <InputField label="Expiry Date" type="date" name="expiryDate"     placeholder="Enter expire date" onChange={handleChange}/>

    </div>
  );
};

export default NationalityInfo;
