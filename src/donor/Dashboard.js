import React, { useState } from 'react';
import Notification from '../components/Notification';
import { FaSearch, FaMoneyBill, FaComments, FaBell } from 'react-icons/fa';
import logo from '../components/images/logo2.jpg'
import HistoryPage from '../components/HistoryPage';

function Navbar({ name }) {
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
              className="block w-full pl-10 pr-3 py-2 rounded-lg leading-5 bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: '500px' }}
            />
          </div>
        </div>
        <div className="flex items-center ">
        <div className='flex space-x-10'>
        <FaMoneyBill className="h-6 w-6 text-gray-600" />
          <FaComments className="h-6 w-6 text-gray-600 ml-4" />
          <FaBell className="h-6 w-6 text-gray-600 ml-4" />
        </div>
          <img className="w-8 h-8 rounded-full border-2 border-green-500 ml-4" src="https://dummyimage.com/100x100/000/fff" alt="User" />
          <h2 className="ml-2 text-md font-medium text-gray-800">{`Hello, ${name}`}</h2>
        </div>
      </div>
    </div>
  </nav>
  
  
  );
}


  
  function Dashboard() {
  const name = 'John Doe';
  
  return (
  <div className="bg-gray-100 min-h-screen">
  <Navbar name={name} />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div>
        
    </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="col-span-2">
   <HistoryPage/>   
  </div>
  </div>
  </div>
  </div>
  );
  }
  
  export default Dashboard;
