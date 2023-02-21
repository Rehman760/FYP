import React from 'react';
import InputField from './InputField';

const AddressInfo = ({handleChange}) => {
  return (
    <div className=" p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-medium mb-4">Address Information</h2>
      <InputField label="House Number" type="text" name="houseNumber" placeholder="Enter house number" onChange={handleChange}/>
      <InputField label="Street Address" type="text" name="streetAddress" placeholder="Enter street address" onChange={handleChange}/>
      <InputField label="City" type="text" name="city" placeholder="Enter City" onChange={handleChange}/>
      <InputField label="State/Province" type="text" name="stateProvince" placeholder="Enter state/Province" onChange={handleChange}/>
      <InputField label="Postal/Zip Code" type="text" name="postalZipCode" placeholder="Enter Postal/Zip Code" onChange={handleChange}/>
      <InputField label="Country" type="text" name="country" placeholder="Enter Country" onChange={handleChange}/>
    </div>
  );
};

export default AddressInfo;
