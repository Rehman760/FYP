import Hamburger from 'hamburger-react'
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../images/logo2.jpg'
import { DonorNavbarData } from './DonorNavbarData';

export default function DonorNavbar(){
    return (
        <Navbar name={"Hamza"}/>

    );

}


function Navbar({ name }) {
    const [isOpenHumSign, setOpenHumSign] = useState(false);
    const list = [''];
    return (
    <>
    <nav className="fixed w-full bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between ">
                <div className="flex items-center h-16">
                    <div>
                        <img src={logo} alt="Logo" className="h-12 w-12 mr-2" />
                    </div>
                    <div className='flex items-center'>
                    {                        
                        DonorNavbarData.map((value, key)=>(
                            <NavLink to={value.link} key={key}>
                                <div >{value.icon}</div>
                                <div >{value.title}</div>
                            </NavLink>
                        ))
                    }
                    </div>
                    

                    
                </div>
                <div className="flex items-center">
                        <div className="ml-4 flex items-center">
                            <h2 className="ml-2 text-md font-medium text-gray-800">{`Hello`}</h2>
                            <img className="w-8 h-8 rounded-full border-2 border-green-500" src="https://dummyimage.com/100x100/000/fff" alt="User"/>
                        </div>
                </div>
            </div>
        </nav>        

    </>
    );
    
  }
  