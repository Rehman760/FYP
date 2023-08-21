// SignUpPage.js
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { saveProfile } from '../Firebase/SaveData';

const SignUpPage = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [data, setData] = useState({
        universityName:'',
        address:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const handleSignUpSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');
        // Handle form submission
        if(data.password === data.confirmPassword){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((response) => {
                console.log(response.user);
                const {universityName, address, email} = data;
                saveProfile({universityName, address, userType:'university'}, email, setLoading);
                
            }).catch((error) => {
                if(error.code === 'auth/email-already-in-use'){
                    setErrorMessage('Please use another email. This email is already in use.');
                }      
                else if(error.code === 'auth/weak-password'){
                    setErrorMessage('Please use strong password');
                }    
            });
        }else{
            setErrorMessage('Password does not match');
        }
        setLoading(false);
    }

    const handleInputChange = (e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
  return (
    <div className="bg-green-200 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4 text-center">University Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="universityName" className="block text-sm font-medium text-gray-700">Name of University</label>
            <input type="text" id="universityName" name="universityName" className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-green-300" onChange={handleInputChange} value={data?.universityName}/>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" id="address" name="address" className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-green-300" onChange={handleInputChange} value={data?.address}/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-green-300" onChange={handleInputChange} value={data?.email}/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-green-300" onChange={handleInputChange} value={data?.password}/>
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-green-300" onChange={handleInputChange} value={data?.confirmPassword}/>
          </div>
          {loading && (
            <div className="bg-blue-200 text-blue-800 p-2 rounded-md mb-4 text-center">
                Loading...
              </div>
            )}

        {errorMessage && (
            <div className="bg-red-200 text-red-800 p-2 rounded-md mb-4 text-center">
                {errorMessage}
            </div>
        )}
          <div className="flex items-center justify-center">
            <button type="submit" onClick={handleSignUpSubmit} className="w-full h-12 font-bold  text-green-500 border border-green-100 rounded-lg hover:text-white-500 hover:bg-green-600 hover:text-white">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
