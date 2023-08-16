import React, { useState } from 'react';
import InputField from './InputField';
import { useEffect } from 'react';

const SelfInfo = ({sendData, data, edit}) => {
  const [selfInfo, setSelfInfo] = useState({
    name:'',
    email:'',
    phone:''
  }); 

  useEffect(()=>{
    setSelfInfo(data);
  }, [data])

  useEffect(()=>{
    sendData(selfInfo);
  });

  const handleValueChange = (e)=>{
    edit(true);
    const key = e.target.name;
    const value = e.target.value;
    setSelfInfo({...selfInfo, [key]:value});
  }

  return (
    <div className="p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Self Information</h2>
      
      <div className="flex items-center mb-4">
        <label htmlFor="name" className="w-32 mr-4">
          Name:
        </label>
        <InputField
          type="text"
          name="name"
          value={selfInfo?.name}
          placeholder="Enter name"
          onChange={handleValueChange}
        />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="email" className="w-32 mr-4">
          Email:
        </label>
        <InputField
          type="email"
          name="email"
          value={selfInfo?.email}
          placeholder="Enter email"
          onChange={handleValueChange}
        />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="phone" className="w-32 mr-4">
          Phone:
        </label>
        <InputField
          type="tel"
          name="phone"
          value={selfInfo?.phone}
          placeholder="Enter phone"
          onChange={handleValueChange}
        />
      </div>
    </div>
  );
};

export default SelfInfo;
