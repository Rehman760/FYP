import React from 'react'
import { useParams } from 'react-router-dom'
import AvailableStds from './AvailableStds';
import DonorProfile from './DonorProfile';

function DonorContainer() {
  const {donorID} = useParams();
  console.log(donorID);

  if(donorID==='record'){
    return <AvailableStds/>
  }
  else if(donorID ==='chat'){
    return <h1>I am a chat</h1>
  }
  else if(donorID === 'notification'){
    return <h1>I am notification</h1>
  }
  else if(donorID==='profile'){
    return <DonorProfile/>
  }
}
export default DonorContainer;