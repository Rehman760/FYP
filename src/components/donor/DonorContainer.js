import React from 'react'
import { useParams } from 'react-router-dom'
import AvailableStds from './AvailableStds';
import DonorProfile from './DonorProfile';
import StudentTable from '../StudentTable';
import SponsoredStudent from './SponsoredStudents';
import ResponsiveTable from './AvailableStds';
import Logout from '../Logout';
import ChatList from '../ChatList';

function DonorContainer({donorEmail}) {
  const {donorID} = useParams();
  console.log(donorID);

  if(donorID==='record'){
    return <ResponsiveTable/>
  }
  else if(donorID ==='chat'){
    return <ChatList/>
  }
  else if(donorID === 'notification'){
    console.log(donorEmail);
    return <SponsoredStudent donorEmail={donorEmail}/>
  }
  else if(donorID==='profile'){
    return <DonorProfile/>
  }
  else if(donorID==='logout'){
    return <Logout/>
  }
}
export default DonorContainer;