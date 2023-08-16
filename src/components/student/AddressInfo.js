import React, { useEffect, useState } from 'react';
import InputField from './InputField';

const AddressInfo = ({sendData, data, edit}) => {
  const [address, setAddress] = useState({
    houseNumber:'',
    streetAddress:'',
    city:'',
    stateProvince:'',
    postalZipCode:'',
    country:''
  });

  useEffect(()=>{
    setAddress(data);
  }, [data])

  useEffect(()=>{
    sendData(address);
  });

  const handleValueChange = (e)=>{
    edit(true);
    const key = e.target.name;
    const value= e.target.value;
    setAddress({...address, [key]:value});
  }
  
  return (
    <div className=" p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-medium mb-4">Address Information</h2>
      <InputField label="House Number" type="text" value={address?.houseNumber} name="houseNumber" placeholder="Enter house number" onChange={handleValueChange}/>
      <InputField label="Street Address" type="text" value={address?.streetAddress} name="streetAddress" placeholder="Enter street address" onChange={handleValueChange}/>
      <InputField label="City" type="text" name="city" value={address?.city} placeholder="Enter City" onChange={handleValueChange}/>
      <InputField label="State/Province" type="text" value={address?.stateProvince} name="stateProvince" placeholder="Enter state/Province" onChange={handleValueChange}/>
      <InputField label="Postal/Zip Code" type="text" value={address?.postalZipCode} name="postalZipCode" placeholder="Enter Postal/Zip Code" onChange={handleValueChange}/>
      <InputField label="Country" type="text" value={address?.country} name="country" placeholder="Enter Country" onChange={handleValueChange}/>
    </div>
  );
};

export default AddressInfo;
