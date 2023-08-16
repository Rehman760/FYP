import React, { useEffect, useState } from 'react';
import InputField from './InputField';

const FatherInfo = ({sendData, data, edit}) => {
  const [fatherInfo, setFatherInfo] = useState({
    fatherName:'',
    fatherOccupation:'',
    fatherPhone:'',
    fathernEmail :''
  });

  useEffect(()=>{
    setFatherInfo(data);
  }, [data])

  useEffect(()=>{
    sendData(fatherInfo);
  });

  const handleValueChange = (e)=>{
    edit(true);
    const key = e.target.name;
    const value = e.target.value;
    setFatherInfo({...fatherInfo, [key]:value});
  }
  return (
    <div className=" p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-medium mb-4">Father's Information</h2>
      <InputField label="Full Name" type="text" value={fatherInfo?.fatherName} name="fatherName"  placeholder="Enter father name" onChange={handleValueChange}/>
      <InputField label="Occupation" type="text" value={fatherInfo?.fatherOccupation} name="fatherOccupation"  placeholder="Enter father occupation" onChange={handleValueChange}/>
      <InputField label="Phone Number" type="text" value={fatherInfo?.fatherPhone} name="fatherPhone"  placeholder="Enter phone number" onChange={handleValueChange}/>
      <InputField label="Email" type="email" value={fatherInfo?.fatherEmail} name="fatherEmail"  placeholder="Enter email" onChange={handleValueChange}/>
    </div>
  );
};

export default FatherInfo;
