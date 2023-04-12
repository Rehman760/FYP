import React , {useState} from 'react';
import Hamburger, {Squash as hamburger} from 'hamburger-react'
import { StudentNavbarData } from './StudentNavbarData';
import { NavLink, Outlet } from 'react-router-dom';

function StudentNavbar() {
    const [isOpenHumSign , setOpenHumSign] = useState(false);
    
    // const toggleFn = ()=>setOpenHumSign(!isOpenHumSign);

    return (
        <div className="student-portal">
           <div style={{width: isOpenHumSign ? "250px" : "50px"}} className="side-nav-bar">
               <div className="logo-section">
                   <h1 style={{display: isOpenHumSign ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpenHumSign ? "85px" : "0px"}} className="ham-sign">
                       <Hamburger toggled={isOpenHumSign} toggle={setOpenHumSign} size={20}/>
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
    );
  
}

export default StudentNavbar