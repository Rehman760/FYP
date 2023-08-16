import React, {useEffect, useState} from 'react';
import SelfInfo from './SelfInfo';
import BioInfo from './BioInfo';
import FatherInfo from './FatherInfo';
import AddressInfo from './AddressInfo';
import NationalityInfo from './NationalityInfo';
// import { getMyEmail } from './StudentNavbarData';
import { getFormData, savePersonalInfo, saveProfileImage } from '../Firebase/SaveData';


function checkForEmptyField(obj){
  console.log(obj);
}

function PersonalInfo({setActiveSection, activeSectionNo}) {
  // const email = getMyEmail();
  const [selfData, setSelfData] = useState();
  const [bioData, setBioData] = useState();
  const [fatherData, setFatherData] = useState();
  const [addressData, setAddressData] = useState();
  const [nationalityData, setNationalityData] = useState();
  const [placeSelfData, setPlaceSelfData] = useState();
  const [placeBioData, setPlaceBioData] = useState();
  const [placeFatherData, setPlaceFatherData] = useState();
  const [placeAddressData, setPlaceAddressData] = useState();
  const [placeNationalityData, setPlaceNationalityData] = useState();
  const [isEdit, setIsEdit] = useState(false);
  

  useEffect(()=>{
    const email = sessionStorage.getItem('studentEmail');
    getFormData(email, function(data){
      setPlaceSelfData(data?.personalInfo?.selfData);
      setPlaceBioData(data?.personalInfo?.bioData);
      setPlaceFatherData(data?.personalInfo?.fatherData);
      setPlaceAddressData(data?.personalInfo?.addressData);
      setPlaceNationalityData(data?.personalInfo?.nationalityData);
    })
  }, [])

  const handleEdit = (value)=>{
    setIsEdit(value);
  }
  const handleNextPage = () => {
    //Task-1 -Check if any field is null then generate an indicator message.
    // checkForEmptyField(selfData);
    // showMe();
    //Task-2 -Save data to the database
    // alert(`email is ${email}`);
    if(isEdit){
      const email = sessionStorage.getItem('studentEmail');
      savePersonalInfo([selfData, bioData, fatherData, addressData, nationalityData], email);
    }
    //Task 3 -Move to next page
    setActiveSection(activeSectionNo+1);
    // showMe();
  };

  const handlePreviousPage = () => {
    // Move to previous page
    alert("No Previous Page. Stop here");
  };

  const onSelfDataFetch = (data)=>{
    // console.log(data);
    setSelfData(data);
  }
  const onBioDataFetch = (data)=>{
    // console.log(data);
    setBioData(data); 
  }
  const onFatherDataFetch =(data)=>{
    // console.log(data);
    setFatherData(data);
  }
  const onAddressDataFetch = (data)=>{
    // console.log(data);
    setAddressData(data);

  }

  const onNationalityDataFetch = (data)=>{
    // console.log(data);
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


  
  return (
    
    <div className="bg-green-50 p-8 rounded-lg shadow-md">
      <SelfInfo data={placeSelfData} sendData={onSelfDataFetch} edit={handleEdit}/>
      <hr className="my-8" />
      <BioInfo data={placeBioData} sendData={onBioDataFetch} edit={handleEdit}/>
      <hr className="my-8" />
      <FatherInfo data={placeFatherData} sendData={onFatherDataFetch} edit={handleEdit}/>
      <hr className="my-8" />
      <AddressInfo data={placeAddressData} sendData={onAddressDataFetch} edit={handleEdit}/>
      <hr className="my-8" />
      <NationalityInfo data={placeNationalityData} sendData={onNationalityDataFetch} edit={handleEdit}/>

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
          {isEdit ? "Save & Next" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
