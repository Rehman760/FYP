import React, { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';
import { StudentNavbarData } from './StudentNavbarData';
import { NavLink, Outlet } from 'react-router-dom';
import { getProfileImage, saveEmail } from '../Firebase/SaveData';
import logo from "../images/logo2.jpg";

function StudentNavbar() {
  const [isOpenHumSign, setOpenHumSign] = useState(false);
  const [URL, setURL] = useState('');
  const myEmail = sessionStorage.getItem("studentEmail");

  const setURLByMe = (url) => {
    setURL(url);
  };

  useEffect(()=>{
    
    // if(myEmail===''){
    //   alert("Page not found!");
    //   return;
    // }
    getProfileImage(myEmail,setURLByMe);
  }, []);

  

  return (
    <>
      <nav className="fixed w-full bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between ">
          <div className="flex items-center h-16">
            <div>
              <Hamburger toggled={isOpenHumSign} toggle={setOpenHumSign} size={20} />
            </div>
            <div className="flex-shrink-0">
              <h1 className="text-lg font-bold text-gray-800">Student Dashboard</h1>
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-4 flex items-center">
              <h2 className="ml-2 text-md font-medium text-gray-800">{`Hello, ${myEmail}`}</h2>
              <img className="w-8 h-8 rounded-full border-2 border-green-500" src={URL} alt="User" />
            </div>
          </div>
        </div>
      </nav>
      <div className="student-portal">
        <div style={{ width: isOpenHumSign ? "250px" : "50px" }} className="side-nav-bar">
          <div className="logo-section">
            <h1 style={{ display: isOpenHumSign ? "block" : "none" }} className="logo">
              <img className="rounded-full ml-8" src={logo} alt="logo" />
            </h1>
            <div style={{ marginLeft: isOpenHumSign ? "85px" : "0px" }} className="ham-sign">
              {/* <Hamburger toggled={isOpenHumSign} toggle={setOpenHumSign} size={20}/> */}
            </div>
          </div>
          {StudentNavbarData.map((value, key) => (
            <NavLink to={value.link} key={key} className="nav-item">
              <div className="nav-icon">{value.icons}
              </div>
              <div style={{ display: isOpenHumSign ? "block" : "none" }} className="nav-title">
                <span className="title-only">{value.title}</span>
              </div>
            </NavLink>
          ))}
        </div>
        <main style={{ marginLeft: isOpenHumSign ? "250px" : "50px" }}>
          <Outlet/>
        </main>
      </div>
    </>
  );
}

export default StudentNavbar;
