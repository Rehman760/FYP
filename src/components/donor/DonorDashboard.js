import React, { useState, useEffect } from 'react';
import Notification from '../Notification';
import { FaSearch, FaMoneyBill, FaComments,FaHandshake ,FaBars, FaTimes, FaSignOutAlt, FaEdit } from 'react-icons/fa';
import logo from '../images/logo2.jpg'
import { Link, Outlet } from 'react-router-dom';
import { getProfileImage } from '../Firebase/SaveData';
import { useNavigate } from 'react-router-dom';

function Navbar({ name }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState('https://dummyimage.com/100x100/000/');
  useEffect(()=>{
      getProfileImage(sessionStorage.getItem('donorEmail'), setImageURL);
  }, [])

  const handleLogout = () => {
    // Add your logout logic here
    setShowMenu(false);
    console.log('Logout clicked');
    navigate('logout');
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-12 mr-2" />
            
          </div>
          <div className="flex items-center sm:hidden relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className={`${showMenu ? 'hidden' : 'block'} h-6 w-6`} />
              <FaTimes className={`${showMenu ? 'block' : 'hidden'} h-6 w-6`} />
            </button>
          </div>
          <div className={`hidden sm:flex sm:items-center ${showMenu ? 'block' : 'hidden'}`}>
            <div className="flex flex-row sm:flex-row sm:flex-col space-y-2 sm:space-y-0 sm:space-x-10">
              <Link to="record"> <FaMoneyBill className="h-6 w-6 text-gray-600" /></Link>
              <Link to="chat"> <FaComments className="h-6 w-6 text-gray-600" /></Link>
              <Link to="notification"> <FaHandshake className="h-6 w-6 text-gray-600" /></Link>
              <Link to="editProfile"> <FaEdit className="h-6 w-6 text-gray-600" /></Link>
            </div>
            <div className="sm:flex sm:items-center">
              <Link to="profile"> <img className="w-8 h-8 rounded-full border-2 border-green-500 ml-4" src={imageURL} alt="User" /></Link>
              <h2 className="ml-2 text-md font-medium text-gray-800">{`Hello, ${name}`}</h2>
              <button onClick={handleLogout} className="ml-4 text-gray-500 hover:text-green-700 font-medium focus:outline-none">
                <FaSignOutAlt className="h-5 w-5" />
              </button>
            </div>
          </div>
          {showMenu && (
            <div className="sm:block sm:px-8 absolute top-40 right-0 w-2/3 bg-white border-t border-green-200 shadow-lg z-20">
              <div className="flex flex-col space-y-2">
                <Link to='record' className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-green-700 hover:bg-green-100" onClick={()=>setShowMenu(false)}>Needy Students</Link>
                <Link to="chat" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-green-700 hover:bg-green-100" onClick={()=>setShowMenu(false)}>Chats</Link>
                <Link to="notification" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-green-700 hover:bg-green-100" onClick={()=>setShowMenu(false)}>Donated</Link>
                <Link to="profile" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-green-700 hover:bg-green-100" onClick={()=>setShowMenu(false)}>View Profile</Link>
                <Link to="editProfile" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-green-700 hover:bg-green-100" onClick={()=>setShowMenu(false)}>Edit Profile</Link>
                <button onClick={handleLogout} className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-green-700 hover:bg-green-100 focus:outline-none">
                  <FaSignOutAlt className="h-5 w-5" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

function DonorDashboard() {
  const name = sessionStorage.getItem('donorName');
  

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar name={name} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-2">
            <Outlet/>
            {/* <AvailableStds category={category} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonorDashboard;
