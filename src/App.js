import { useEffect } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import HomePage from './components/HomePage';
import HistoryPage from './components/HistoryPage';
import UniversityPage from './components/UniversityPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Navbar  from './components/Navbar';
import Donors from './components/Donors'
import Contact from "./components/Contact"
import Services from './components/Services';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import ForgotPassword from './components/ForgotPassword';
import StudentInformation from './components/student/StudentInformation';
import BasicComponentForData from './components/BasicComponentForData';
import Notification from './components/Notification';
import StudentNav from './components/student/Navbar';
import Dashboard from './components/student/Dashboard';
import StudentProfile from './components/student/StudentProfile';
import { useState } from 'react';
import StudentNavbar from './components/student/StudentNavbar';
import Container from './components/student/Container';
import DonorDashboard from './components/donor/DonorDashboard';
import DonorProfile from './components/donor/DonorProfile';
import DonorForm from './components/donor/DonorForm';
import DonorNavbar from './components/donor/DonorNavbar';
import AvailableStds from './components/donor/AvailableStds';
import NotFound from './components/NotFound';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState('');
  const [stdEmail, setStdEmail] = useState('');


 
  //code for removing the scroll
  // useEffect(() => {
  //   // Set the overflow property of the body to hidden
  //   document.body.style.overflow = 'hidden';

  //   // Revert the overflow property when the component is unmounted
  //   return () => {
  //     document.body.style.overflow = 'visible';
  //   };
  // }, []);

  return (
    

    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/HistoryPage"  element={<HistoryPage />} />
          <Route path="/Donors" element={<Donors/>} />
          <Route path='/UniversityPage' element={<UniversityPage />} />
          <Route path='/Services' element={<Services />}/>
          <Route path='/Contact' element={<Contact/>}/>          
          <Route path='/LogIn' element={<LogIn myEmail={setEmail}/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/ForgotPassword' element={<ForgotPassword />}/>
          <Route path='/BasicComponentForData' element={<BasicComponentForData />}/>
        </Route>
        <Route path="student" element={<StudentNavbar myEmail={email}/>}>
            <Route path=":catId" element={<Container email={email}/>}/>
        </Route>

        <Route path="donor" element={<LogIn role='donor'/>}>
        </Route>
        

        <Route path='donor/nav-bar' element={<DonorDashboard/>}/>
        <Route path='donor/student/'>
          <Route path=':stdID' element={<StudentProfile/>}/>
        </Route>
        <Route path='donor/sponsored' element={<>Sponsored List of Student</>}/>
  
          {/* <Route path='/components/student/StudentProfile' element={<StudentProfile/>}/> */}

        {/* <Route path='/components/student/Dashboard' element={<Dashboard/>}/> */}
      </Routes>

    </BrowserRouter>
  );
}
