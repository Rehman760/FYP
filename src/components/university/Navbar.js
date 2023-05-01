import React from 'react';

function Navbar() {
  return (
    <nav className="bg-green-500 p-4 flex items-center justify-between">
      <div>
        <span className="text-white font-bold text-xl">University</span>
      </div>
      <div>
        <span className="text-white mr-4">John Doe</span>
        <button className="bg-white text-green-500 font-bold py-2 px-4 rounded-lg">Log Out</button>
      </div>
    </nav>
  );
}

export default Navbar;
