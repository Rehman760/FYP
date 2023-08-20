import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {app} from "./Firebase/FirebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { saveProfile } from "./Firebase/SaveData";

function SignUp() {
  const location = useLocation();
  const role = location?.state?.role;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Handle form submission
    if(password === confirmPassword){
      const auth = getAuth();    
      createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user);
        // response.user.sendEmailVerification();
        saveProfile({firstname: firstName, secondname: lastName, email:email, userType:role}, email, function(value){
          console.log(value);
          setLoading(value);
        });
        // auth.signOut();
        alert("Account Created Succesfully");
        navigate("/LogIn");     
      })
      .catch((error) => {
        // const errorMessage = error.message;
        if(error.code === 'auth/email-already-in-use'){
          setErrorMessage('Please use another email. This email is already in use.');
        }      

        else if(error.code === 'auth/weak-password'){
          setErrorMessage('Please use strong password');
        }
            
        // alert(error.code);
      });
    }else{
      setErrorMessage('Password does not match');
    }

  };

  return (
    <div className="min-h-screen bg-green-500 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-50 m-4"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-green-500 ">Finance for Education</h1>
          <p className="text-xl font-semibold mt-2 mb-8 text-gray-500">Sign up {role}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="first-name">
            First Name
          </label>
          <input
            className="border rounded-lg px-3 py-2 w-full"
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} required
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
            onChange={(e) => setLastName(e.target.value)} required
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
            onChange={(e) => setEmail(e.target.value)} required
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
            required
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
            required
          />
        </div>

        {errorMessage &&  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          {/* <strong class="font-bold">Error!</strong> */}
          <span className="block sm:inline">{errorMessage}</span>
        </div>}
            
        <button
          type="submit"
          className="w-full h-12 font-bold  text-green-500 border border-green-100 rounded-lg hover:text-white-500 hover:bg-green-600 hover:text-white">
          {loading ? "Loading..." : "Sign Up"}
        </button>         
      </form>
    </div>
  );
}

export default SignUp;
