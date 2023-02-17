import { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // logic for sending reset password email to the user's email address
    setMessage("An email with reset instructions has been sent to your email address.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-green-500">
      <div className="w-full max-w-md px-4 py-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center mb-6">Forget Password</h2>
        {message && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
            <p>{message}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="block w-full py-2 px-3 border border-gray-400 rounded mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
      <Link to="/LogIn" className="text-white font-medium">Back to login</Link>
    </div>
  );
}

export default ForgotPassword;



