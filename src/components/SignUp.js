import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {app} from "./Firebase/FirebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const auth = getAuth();    
    createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
      console.log(response.user);
      // response.user.sendEmailVerification();
      auth.signOut();
      alert("Account Created Succesfully");
      navigate("/LogIn");     
    })
    .catch((error) => {
      // const errorMessage = error.message;
      if(error.code === 'auth/email-already-in-use'){
        setErrorMessage('Please use another email. This email is already in use.');
      }      

      if(error.code === 'auth/weak-password'){
        setErrorMessage('Please use strong password');
      }
           
      // alert(error.code);
    });

  };

  return (
    <div className="min-h-screen bg-green-500 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-green-500">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="first-name">
            First Name
          </label>
          <input
            className="border rounded-lg px-3 py-2 w-full"
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="border rounded-lg px-3 py-2 w-full"
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border rounded-lg px-3 py-2 w-full"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border rounded-lg px-3 py-2 w-full"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            className="border rounded-lg px-3 py-2 w-full"
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {errorMessage &&  <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          {/* <strong class="font-bold">Error!</strong> */}
          <span class="block sm:inline">{errorMessage}</span>
        </div>}
            
        <button
          type="submit"
          className="w-full h-12 font-bold  text-green-500 border border-green-100 rounded-lg hover:text-white-500 hover:bg-green-600 hover:text-white">
          Sign Up     
        </button>         
      </form>
    </div>
  );
}

export default SignUp;
