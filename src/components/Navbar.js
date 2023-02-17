import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from './images/logo2.jpg'

const Navbar = () => {
  return (
    <>
    <nav className="bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <a href="#" className="font-bold text-3xl ">
              <img src={logo} alt="Finance for Education" className="w-16" />
              
            </a>
          </div>
          <div className="flex">
            <Link to="/" className="px-4">Home</Link>
            <Link  to="/AboutUs" className="px-4">About</Link>
            <Link to="/HistoryPage"className="px-4" >History</Link>
            <Link to="/Donors"className="px-4" title="Our Donors">Donors</Link>
            <Link to="/UniversityPage" className="px-4">Universities</Link>
            <Link to="/Services" className="px-4">Services</Link>
            <Link to="/Contact" className="px-4">Contact</Link>
            <Link to="/LogIn" className="px-4">LogIn</Link>
            <Link to="/SignUp" className="px-4">Sign Up</Link>
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
