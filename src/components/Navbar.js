import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "./images/logo2.jpg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <nav className="bg-white animate-fade-in">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex items-center flex-shrink-0 mr-6">
              <a href="/" className="font-bold text-3xl ">
                <img src={logo} alt="Finance for Education" className="w-16" />
              </a>
            </div>
            <div className="block md:hidden">
              <button
                onClick={toggleNav}
                className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-gray-900 hover:border-gray-900"
              >
                <svg
                  className="h-3 w-3 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 0h20v2H0zM0 8h20v2H0zM0 16h20v2H0z" />
                </svg>
              </button>
            </div>
            <div
              className={`w-full block flex-grow md:flex md:items-center md:w-auto ${
                isNavOpen ? "block" : "hidden"
              }`}
            >
              <div className=" text-md md:flex-grow">
                <Link
                  to="/"
                  className="block mt-4 md:inline-block md:mt-0 md:ml-6 hover:text-green-600 cursor-pointer"
                  onClick={closeNav}
                >
                  Home
                </Link>
                <Link to="/AboutUs" className="block mt-4 md:inline-block md:mt-0 md:ml-6 hover:text-green-600 cursor-pointer"   onClick={closeNav}>About</Link>
              <Link to="/HistoryPage"className="block mt-4 md:inline-block md:mt-0 md:ml-6 hover:text-green-600 cursor-pointer"    onClick={closeNav}>History</Link>
              <Link to="/Donors"className="block mt-4 md:inline-block md:mt-0 md:ml-6 hover:text-green-600 cursor-pointer"    onClick={closeNav} title="Our Donors">Donors</Link>
              <Link to="/UniversityPage" className="block mt-4 md:inline-block md:mt-0 md:ml-6 hover:text-green-600 cursor-pointer" onClick={closeNav}>   Universities</Link>
              <Link to="/Services" className="block mt-4 md:inline-block md:mt-0 md:ml-6 hover:text-green-600 cursor-pointer"onClick={closeNav}>Services</Link>
              <Link to="/Contact" className="block mt-4 md:inline-block md:mt-0 md:ml-6 hover:text-green-600 cursor-pointer"onClick={closeNav}>Contact</Link>

                {/* <Link
                  to="/BasicComponentForData"
                  className="block mt-4 md:inline-block md:mt-0 md:ml-6 hover:text-green-600 cursor-pointer"onClick={closeNav}
                >
                  New component
                </Link> */}
              </div>
              <div>
                <Link to="/logIn">
                  <button className="bg-green-500 text-white px-3 py-2 rounded-lg md:ml-4" onClick={(e)=>setIsNavOpen(false)}>
                    Log in as Student
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
