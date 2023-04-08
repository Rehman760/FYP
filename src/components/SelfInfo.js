import React, { useState } from 'react';
import InputField from './InputField';
import { useEffect } from 'react';

const SelfInfo = ({sendData}) => {
  const [selfInfo, setSelfInfo] = useState({}); 

  useEffect(()=>{
    sendData(selfInfo);
  });

  return (
    <div className="p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Self Information</h2>
      <div className="flex items-center mb-4">
        <label htmlFor="profile-image" className="w-32 mr-4">
          Profile Image:
        </label>
        <div className="flex items-center">
          <input
            type="file"
            id="profile-image"
            onChange={(e)=>setSelfInfo({image:e.target.files[0]})}
            className="hidden md:w-1/2"
          />
          <label
            htmlFor="profile-image"
            className="bg-green-500 text-white px-3 py-2 rounded cursor-pointer"
          >
            Upload Image
          </label>
          {selfInfo.image && (
            <div className="ml-4 flex items-center">
              <img
                src={URL.createObjectURL(selfInfo.image)}
                alt="Profile"
                className="w-16 h-16 object-cover rounded-full"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center mb-4">
        <label htmlFor="name" className="w-32 mr-4">
          Name:
        </label>
        <InputField
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={(e) => setSelfInfo({...selfInfo, name:e.target.value})}
        />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="email" className="w-32 mr-4">
          Email:
        </label>
        <InputField
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={(e) => setSelfInfo({...selfInfo, email:e.target.value})}
        />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="phone" className="w-32 mr-4">
          Phone:
        </label>
        <InputField
          type="tel"
          name="phone"
          placeholder="Enter phone"
          onChange={(e) => {
            setSelfInfo({...selfInfo, phone:e.target.value})
            console.log(selfInfo);
            // setSelfData(selfInfo);
          }}
        />
      </div>
    </div>
  );
};

export default SelfInfo;
