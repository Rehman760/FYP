import React, { useEffect, useState } from 'react';
import InputField from './InputField';

const NationalityInfo = ({ sendData}) => {
  const [nationalityInfo, setNationalityInfo] = useState({});
  useEffect(()=>{
    sendData(nationalityInfo);
  });
  return (
    <div className=" p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-medium mb-4">Nationality Information</h2>
      <InputField label="Nationality" type="text" name="nationality"     placeholder="Enter Nationality" onChange={(e)=>setNationalityInfo({...nationalityInfo, nationality:e.target.value})}/>
      <InputField label="Passport Number" type="text" name="passportNumber"     placeholder="Enter passport number" onChange={(e)=>setNationalityInfo({...nationalityInfo, cnic:e.target.value})}/>
      <InputField label="Country of Issue" type="text" name="countryOfIssue"     placeholder="Enter country of issue"onChange={(e)=>setNationalityInfo({...nationalityInfo, countryIssue:e.target.value})}/>
      <InputField label="Expiry Date" type="date" name="expiryDate"     placeholder="Enter expire date" onChange={(e)=>setNationalityInfo({...nationalityInfo, expiryDate:e.target.value})}/>

    </div>
  );
};

export default NationalityInfo;
