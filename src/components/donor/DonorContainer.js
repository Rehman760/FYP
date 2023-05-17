import React from 'react'
import { useParams } from 'react-router-dom'
import AvailableStds from './AvailableStds';
import DonorProfile from './DonorProfile';
import StudentTable from '../StudentTable';
import SponsoredStudent from './SponsoredStudents';

function DonorContainer({donorEmail}) {
  const {donorID} = useParams();
  console.log(donorID);

  if(donorID==='record'){
    return <AvailableStds donorEmail={donorEmail}/>
  }
  else if(donorID ==='chat'){
    return <h1>I am a chat</h1>
  }
  else if(donorID === 'notification'){
    console.log(donorEmail);
    return <SponsoredStudent donorEmail={donorEmail}/>
  }
  else if(donorID==='profile'){
    return <DonorProfile/>
  }
}
export default DonorContainer;