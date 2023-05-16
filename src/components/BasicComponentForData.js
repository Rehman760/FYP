import React from 'react'
import Navbar from './student/Navbar'
import Donor from './donor'
import StudentProfile from './student/StudentProfile'
import DonorProfile from './donor/DonorProfile'
import DonorForm from './donor/DonorForm'
import LoadingComponent from './LoadingComponent'
import PopUp from './PopUp'
import Dashboard from './donor/DonorDashboard'
import StudentInformation from './student/StudentInformation'
import CompleteProfile from './student/CompleteProfile'
import UserProfile from './UserProfile'
import UniversityForm from './university/UniversityForm'
import Details from './university/Details'
import University from './university/Index'
import NotFound from './NotFound'
import PaymentPage from './PaymentPage'
import StudentTable from './StudentTable'
import DonatePage from './donor/DonatePage'


function BasicComponentForData() {
  return (
    <div>
        {/* <Navbar/> */}
        {/* <Donor/> */}
        {/* <StudentProfile/> */}
        {/* <DonorProfile/> */}
        <DonorForm/>
        {/* <LoadingComponent/> */}
        {/* <PopUp/> */}
        {/* <Dashboard/> */}
        {/* <StudentInformation/> */}
        {/* <CompleteProfile/> */}
        {/* <UserProfile/> */}
        {/* <UniversityForm/> */}
      {/* <Details/> */}
      {/* <University/> */}
      {/* <NotFound/> */}
      {/* <PaymentPage/> */}
      {/* <StudentTable/> */}
      {/* <DonatePage/> */}
    </div>
  )
}

export default BasicComponentForData