import React from 'react'
import { useParams } from 'react-router-dom'
import Details from './Details';
import Logout from '../Logout';
import UniversityForm from './UniversityForm';

function UniversityContainer({donorEmail}) {
  const {universityID} = useParams();
  console.log(universityID);

  if(universityID==='details'){
    return <Details/>
  }
  else if(universityID ==='programs'){
    return <UniversityForm/>
  }
  else if(universityID==='logout'){
    return <Logout/>
  }
  
}
export default UniversityContainer;