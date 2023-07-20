import React, { useEffect , useState} from 'react';
import InputField from './InputField';

function BioInfo({sendData, data}) {
  const [bioInfo, setBioInfo] = useState({
    bloodGroup:'',
    cnic:'',
    dob:'',
    placeOfBirth:''
  });

  useEffect(()=>{
    setBioInfo(data);
  }, [data])


  useEffect(()=>{
    sendData(bioInfo);
  });

  const handleValueChange = (e)=>{
    const key = e.target.name;
    const value = e.target.value;
    setBioInfo({...bioInfo, [key]:value})
  }

  return (
    <div className=" p-4 mb-4 rounded-lg shadow-md">
      <h2 className="text-lg font-medium mb-4">Biological Information</h2>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <InputField
            label="Blood Group"
            type="text"
            value={bioInfo?.bloodGroup}
            name="bloodGroup"
            placeholder="Enter blood group"
            onChange={handleValueChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <InputField
            label="CNIC"
            type="text"
            value={bioInfo?.cnic}
            name="cnic"
            placeholder="Enter CNIC"
            onChange={handleValueChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <InputField
            label="Date of Birth"
            type="date"
            value={bioInfo?.dob}
            name="dob"
            placeholder="Select date of birth"
            onChange={handleValueChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <InputField
            label="Place of Birth"
            type="text"
            value={bioInfo?.placeOfBirth}
            name="placeOfBirth"
            placeholder="Enter place of birth"
            onChange={handleValueChange}
          />
        </div>
      </div>
    </div>
  );
}

export default BioInfo;
