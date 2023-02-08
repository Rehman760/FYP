import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <a href="#" className="font-bold text-3xl">Finance for Education</a>
          </div>
          <div className="flex">
            <Link to="/" className="px-4">Home</Link>
            <Link  to="/AboutUs" className="px-4">About</Link>
            <Link to="/HistoryPage"className="px-4">History</Link>
            <Link to="/Donors"className="px-4">Donors</Link>
            <Link to="/UniversityPage" className="px-4">Universities</Link>
            <Link to="/Contact" className="px-4">Contact</Link>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Apply Now</button>
          </div>
        </div>
      </div>
    </nav>
    <Outlet />
    </>
  );
};

export default Navbar;
