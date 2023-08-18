import React, { useState } from 'react';
import Notification from '../Notification';
import { FaSearch, FaMoneyBill, FaComments, FaBell,FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import logo from '../images/logo2.jpg'
import { Link, Outlet } from 'react-router-dom';
import AvailableStds from './AvailableStds';
import { useNavigate } from 'react-router-dom';

function Navbar({ name }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout clicked');
    navigate('logout');
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-12 mr-2" />
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FaSearch className="h-5 w-5 text-gray-500" />
              </span>
              <input
                className="block w-full pl-10 pr-3 py-2 rounded-lg leading-5 bg-white border border-green-300 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
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
              <Link to="notification"> <FaBell className="h-6 w-6 text-gray-600" /></Link>
            </div>
            <div className="sm:flex sm:items-center">
              <Link to="profile"> <img className="w-8 h-8 rounded-full border-2 border-green-500 ml-4" src="https://dummyimage.com/100x100/000/" alt="User" /></Link>
              <h2 className="ml-2 text-md font-medium text-gray-800">{`Hello, ${name}`}</h2>
              <button onClick={handleLogout} className="ml-4 text-gray-500 hover:text-green-700 font-medium focus:outline-none">
                <FaSignOutAlt className="h-5 w-5" />
              </button>
            </div>
          </div>
          {showMenu && (
            <div className="sm:block sm:px-8 absolute top-40 right-0 w-2/3 bg-white border-t border-green-200 shadow-lg z-20">
              <div className="flex flex-col space-y-2">
                <Link to={Notification} className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-green-700 hover:bg-green-100">Records</Link>
                <Link to="chat" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-green-700 hover:bg-green-100">Chats</Link>
                <Link to="notification" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-green-700 hover:bg-green-100">Notification</Link>
                <Link to="profile" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-green-700 hover:bg-green-100">Profile</Link>
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
  const name = sessionStorage.getItem('donorEmail');
  

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
