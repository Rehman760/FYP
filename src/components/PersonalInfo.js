import React from 'react';
import SelfInfo from './SelfInfo';
import BioInfo from './BioInfo';
import FatherInfo from './FatherInfo';
import AddressInfo from './AddressInfo';
import NationalityInfo from './NationalityInfo';
import { useState } from 'react';

function PersonalInfo() {
  const [selfData, setSelfData] = useState();
  const [bioData, setBioData] = useState();
  const [fatherData, setFatherData] = useState();
  const [addressData, setAddressData] = useState();
  const [nationalityData, setNationalityData] = useState();
  const handleNextPage = () => {
    // Save data to database and move to next page
    showMe();
  };

  const onSelfDataFetch = (data)=>{
    console.log(data);
    setSelfData(data);
  }
  const onBioDataFetch = (data)=>{
    console.log(data);
    setBioData(data);    
  }
  const onFatherDataFetch =(data)=>{
    console.log(data);
    setFatherData(data);
  }
  const onAddressDataFetch = (data)=>{
    console.log(data);
    setAddressData(data);

  }

  const onNationalityDataFetch = (data)=>{
    console.log(data);
    setNationalityData(data);
  }


  const showMe = ()=>{
    console.log("Here is data");
    console.log(selfData);
    console.log(bioData);
    console.log(fatherData);
    console.log(addressData);
    console.log(nationalityData);
  }

  const handlePreviousPage = () => {
    // Move to previous page
  };
  return (
    
    <div className="bg-green-50 p-8 rounded-lg shadow-md">
      <SelfInfo sendData={onSelfDataFetch}/>
      <hr className="my-8" />
      <BioInfo sendData={onBioDataFetch}/>
      <hr className="my-8" />
      <FatherInfo sendData={onFatherDataFetch}/>
      <hr className="my-8" />
      <AddressInfo sendData={onAddressDataFetch}/>
      <hr className="my-8" />
      <NationalityInfo sendData={onNationalityDataFetch}/>

      <div className="flex justify-between mt-8">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handlePreviousPage}
        >
          Previous
        </button>
        
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
