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
import StudentInformation from './components/StudentInformation';
import BasicComponentForData from './components/BasicComponentForData';
import Notification from './components/Notification';
import Dashboard from './components/student/Dashboard';
import { useState } from 'react';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");
  
 
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
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/HistoryPage"  element={<HistoryPage />} />
          <Route path="/Donors" element={<Donors/>} />
          <Route path='/UniversityPage' element={<UniversityPage />} />
          <Route path='/Services' element={<Services />}/>
          <Route path="*" element={<Contact />} />
          <Route path='/LogIn' element={<LogIn/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/StudentInformation' element={<StudentInformation />}/>
          <Route path='/ForgotPassword' element={<ForgotPassword />}/>
          <Route path='/BasicComponentForData' element={<BasicComponentForData />}/>
          <Route path='/Notification' element={<Notification />}/>
<<<<<<< HEAD
          <Route path='/Dashboard' element={<Dashboard />}/>
=======
          
>>>>>>> 6bd22e037b900b36221b59810e88a09055946d18
        </Route>
        <Route path='/components/student/Dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}
