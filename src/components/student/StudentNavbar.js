import React , {useState} from 'react';
import Hamburger from 'hamburger-react'
import { StudentNavbarData, getMyEmail } from './StudentNavbarData';
import { NavLink, Outlet } from 'react-router-dom';

function StudentNavbar() {
    const [isOpenHumSign , setOpenHumSign] = useState(false);

    // const toggleFn = ()=>setOpenHumSign(!isOpenHumSign);

    return (
        <>
        <nav className="fixed w-full bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div>
                        <Hamburger toggled={isOpenHumSign} toggle={setOpenHumSign} size={20}/>
                    </div>
                    <div className="flex-shrink-0">
                        <h1 className="text-lg font-bold text-gray-800">Student Dashboard</h1>
                    </div>
                    <div className="flex items-center">
                        <div className="ml-4 flex items-center">

                            <h2 className="ml-2 text-md font-medium text-gray-800">{`Hello, ${getMyEmail()}`}</h2>
                            <img className="w-8 h-8 rounded-full border-2 border-green-500" src="https://dummyimage.com/100x100/000/fff" alt="User"/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div className="student-portal">
           <div style={{width: isOpenHumSign ? "250px" : "50px"}} className="side-nav-bar">
               <div className="logo-section">
                   <h1 style={{display: isOpenHumSign ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpenHumSign ? "85px" : "0px"}} className="ham-sign">
                       {/* <Hamburger toggled={isOpenHumSign} toggle={setOpenHumSign} size={20}/> */}
                   </div>
               </div>
               {
                   StudentNavbarData.map((value, key)=>(
                       <NavLink to={value.link} key={key} className="nav-item">
                           <div className="nav-icon">{value.icons}</div>
                           <div style={{display: isOpenHumSign ? "block" : "none"}} className="nav-title">{value.title}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main style={{marginLeft: isOpenHumSign ? "250px" : "50px"}}>
            <Outlet/>
           </main>
        </div>
        </>
    );
  
}

export default StudentNavbar