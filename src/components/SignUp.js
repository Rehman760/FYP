import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {db} from "./firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";


function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [goToLogin, setgoToLogin] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
    // Handle form submission
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
      // alert("Successfully Account Created");
      console.log(response.user.emailVerified);
      setgoToLogin(true);
      // Signed in
      // const user = userCredential.user;
      // console.log(user.email);
      // ...
    })
    .catch((error) => {
      console.log(error);
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(errorCode);
      // ..
    });



    // const createUser = async ()=>{
    //   console.log("User creation");
    //   const  data = {firstname:firstName, lastname:lastName, email:email, password:password};
    //   await setDoc(doc(db, "users", email.match(/^([^@]*)@/)[1]), data);      
    // };
    // createUser();
  };

  if(goToLogin){
    return <Navigate to="/Login"/>
  }


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
        {/* <Link to="/LogIn"> */}
        <button
          type="submit"
          className="w-full h-12 font-bold  text-green-500 border border-green-100 rounded-lg hover:text-white-500 hover:bg-green-600 hover:text-white">
          Sign Up     
        </button>        
        {/* </Link> */}
      </form>
    </div>
  );
}

export default SignUp;
