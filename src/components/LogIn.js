import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import {app} from "./FirebaseConfig";
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        // Signed in 
        // alert(response.user.email+" is login");
        navigate("/components/student/Dashboard", {state:{email:response.user.email}});
        // navigate("/AfterLogin", {state:{email:email}});
      })
      .catch((error) => {
        alert(" ErorCode: "+error.code);
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-green-500">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-green-500">Finance for Education</h1>
          <p className="text-xl font-semibold mt-2 mb-8 text-gray-500">Login to your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-6">
            <label htmlFor="email" className="text-gray-600 font-medium mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="password" className="text-gray-600 font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-600 font-medium">Remember me</label>
            </div>
            <Link to="/ForgotPassword" className="text-green-500 font-medium hover:text-green-700">Forgot password?</Link>
          </div>
          <button 
          type="submit"
          className="w-full h-12 font-bold text-green-500 border border-green-100 rounded-lg hover:text-white-500 hover:bg-green-600 hover:text-white">
            Log In
          </button>          
        </form>
        <div className="flex justify-center items-center mt-6">
          <span className="text-gray-600">Don't have an account?</span>
          <Link to="/SignUp" className="text-green-500 font-medium ml-2 hover:text-green-700">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
