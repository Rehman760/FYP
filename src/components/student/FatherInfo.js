import React, { useEffect, useState } from 'react';
import InputField from './InputField';

const FatherInfo = ({sendData}) => {
  const [fatherInfo, setFatherInfo] = useState({});
  useEffect(()=>{
    sendData(fatherInfo);
  });
  return (
    <div className=" p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-medium mb-4">Father's Information</h2>
      <InputField label="Full Name" type="text" name="fatherName"  placeholder="Enter father name" onChange={(e)=>setFatherInfo({...fatherInfo, fatherName:e.target.value})}/>
      <InputField label="Occupation" type="text" name="fatherOccupation"  placeholder="Enter father occupation" onChange={(e)=>setFatherInfo({...fatherInfo, occupation:e.target.value})}/>
      <InputField label="Phone Number" type="text" name="fatherPhone"  placeholder="Enter phone number" onChange={(e)=>setFatherInfo({...fatherInfo, phone:e.target.value})}/>
      <InputField label="Email" type="email" name="fatherEmail"  placeholder="Enter email" onChange={(e)=>setFatherInfo({...fatherInfo, fatherEmail:e.target.value})}/>
    </div>
  );
};

export default FatherInfo;
