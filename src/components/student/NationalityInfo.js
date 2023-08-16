import React, { useEffect, useState } from 'react';
import InputField from './InputField';

const NationalityInfo = ({ sendData, data, edit}) => {
  const [nationalityInfo, setNationalityInfo] = useState({
    nationality:'',
    passportNumber:'',
    countryOfIssue:'',
    expiryDate:''

  });

  useEffect(()=>{
    setNationalityInfo(data);
  }, [data])

  useEffect(()=>{
    sendData(nationalityInfo);
  });
  const handleValueChange = (e)=>{
    edit(true);
    const key = e.target.name;
    const value = e.target.value;
    setNationalityInfo({...nationalityInfo, [key]:value});
  }
  return (
    <div className=" p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-medium mb-4">Nationality Information</h2>
      <InputField label="Nationality" type="text" value={nationalityInfo?.nationality} name="nationality" placeholder="Enter Nationality" onChange={handleValueChange}/>
      <InputField label="Passport Number" type="text" value={nationalityInfo?.passportNumber} name="passportNumber" placeholder="Enter passport number" onChange={handleValueChange}/>
      <InputField label="Country of Issue" type="text" value={nationalityInfo?.countryOfIssue} name="countryOfIssue"     placeholder="Enter country of issue" onChange={handleValueChange}/>
      <InputField label="Expiry Date" type="date" value={nationalityInfo?.expiryDate} name="expiryDate"     placeholder="Enter expire date" onChange={handleValueChange}/>

    </div>
  );
};

export default NationalityInfo;
