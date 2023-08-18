import React from 'react';

const Logout = () => {
    const handleLogin = () => {
        sessionStorage.removeItem('studentEmail');
        sessionStorage.removeItem('donorEmail');
        // Replace the current route with a new route (e.g., your login page)
        window.history.replaceState(null, '', '/');
        // Reload the page to reflect the new URL
        window.location.reload();
    }
    const handleCancel = () => {

    }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Logout</h1>
        <p className="text-gray-600 mb-4">Are you sure you want to log out?</p>
        <div className="flex justify-center">
          <button onClick={handleLogin} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded mr-4" >
            Logout
          </button>
          <button onClick={handleCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
