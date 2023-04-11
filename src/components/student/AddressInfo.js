import React, { useEffect, useState } from 'react';
import InputField from './InputField';

const AddressInfo = ({sendData}) => {
  const [address, setAddress] = useState({});

  useEffect(()=>{
    sendData(address);
  });
  
  return (
    <div className=" p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-medium mb-4">Address Information</h2>
      <InputField label="House Number" type="text" name="houseNumber" placeholder="Enter house number" onChange={(e)=>setAddress({...address, houseNo:e.target.value})}/>
      <InputField label="Street Address" type="text" name="streetAddress" placeholder="Enter street address" onChange={(e)=>setAddress({...address, streetAddress:e.target.value})}/>
      <InputField label="City" type="text" name="city" placeholder="Enter City" onChange={(e)=>setAddress({...address, city:e.target.value})}/>
      <InputField label="State/Province" type="text" name="stateProvince" placeholder="Enter state/Province" onChange={(e)=>setAddress({...address, state:e.target.value})}/>
      <InputField label="Postal/Zip Code" type="text" name="postalZipCode" placeholder="Enter Postal/Zip Code" onChange={(e)=>setAddress({...address, zipCode:e.target.value})}/>
      <InputField label="Country" type="text" name="country" placeholder="Enter Country" onChange={(e)=>setAddress({...address, country:e.target.value})}/>
    </div>
  );
};

export default AddressInfo;
