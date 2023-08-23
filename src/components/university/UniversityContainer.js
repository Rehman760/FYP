import React from 'react'
import { useParams } from 'react-router-dom'
import Details from './Details';
import Logout from '../Logout';
import UniversityForm from './UniversityForm';
import AllowStudents from './AllowStudents';

function UniversityContainer({donorEmail}) {
  const {universityID} = useParams();
  console.log(universityID);

  if(universityID==='details'){
    return <Details/>
  }
  else if(universityID ==='add-programs'){
    return <UniversityForm/>
  }
  else if(universityID==='logout'){
    return <Logout/>
  }
  else if(universityID==='view-students'){
    return <AllowStudents/>
  }
  
}
export default UniversityContainer;