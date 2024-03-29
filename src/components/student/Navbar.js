import React from "react";
import logo from '../images/logo2.jpg'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white w-64 flex flex-col items-center justify-between h-full border-r-4 border-green-800 shadow-md">
      <div className="flex items-center w-full p-4">
        <a href="/" className="font-bold text-3xl">
          <img src={logo} alt="Finance for Education" className="w-16" />
        </a>
        <div className="pl-2">
          <p className="text-2xl font-bold text-green-500">Finance for Education</p>
          <span className="text-xs block text-gray-800">Student DASHBOARD</span>
        </div>
        <button
          className="md:hidden ml-auto"
          onClick={handleMenuClick}
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 14H2V12H18V14ZM18 9H2V7H18V9ZM18 4H2V2H18V4Z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 3H20V5H0V3ZM0 9H20V11H0V9ZM0 15H20V17H0V15Z"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block md:flex md:items-center w-full h-full md:w-auto`}
      >
        <div className="md:flex-grow">
          <ul className="md:flex md:flex-col md:items-center md:justify-start md:pt-4 md:pb-4 md:space-y-1">
            <li className="text-gray-700 hover:text-green-600 cursor-pointer">
              <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li className="text-gray-700 hover:text-green-600 cursor-pointer">
              <a href="">Chats</a>
            </li>
            <li className="text-gray-700 hover:text-green-600 cursor-pointer">
              <Link to="../Notification">Notifications</Link>
            </li>
            <li className="text-gray-700 hover:text-green-600 cursor-pointer">
              <a href="">Submitted Forms</a>
            </li>
            <li className="text-gray-700 hover:text-green-600 cursor-pointer">
              <Link to="/">Payments</Link>
            </li>
            <li className="text-gray-700 hover:text-green-600 cursor-pointer">
              <Link to="/">Notifications</Link>
            </li>
            <li className="text-gray-700 hover:text-green-600 cursor-pointer">
              <Link to="/">information</Link>
            </li>
            <li className="text-gray-700 hover:text-green-600 cursor-pointer">
              <Link to="/StudentProfile">Profile</Link>
            </li>
            <li className="text-gray-700 hover:text-green-600 cursor-pointer">
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
        </div>
        </nav>
  );
};
export default Navbar


