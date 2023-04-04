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
import AfterLogin from './components/AfterLogin';
import StudentInformation from './components/StudentInformation';

export default function App() {
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
          <Route path='/AfterLogin' element={<AfterLogin />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
