import React from 'react';
import { NavLink } from 'react-router-dom';
import { getDonorsStudents } from '../Firebase/SaveData';

function Navbar() {
  const name = sessionStorage.getItem('universityName');

  return (
    <nav className="bg-green-500 p-4 flex items-center justify-between">
      <div>
        <span className="text-white font-bold text-xl">University</span>
      </div>
      <div>
        <span className="text-white mr-4">{name}</span>
        <button onClick={(e)=>{}} className="bg-white text-green-500 font-bold py-2 px-4 rounded-lg">
          <NavLink to={'logout'}>Log Out</NavLink>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
