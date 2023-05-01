import React, { useState } from 'react';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    profilePic: 'https://via.placeholder.com/150',
    backgroundPic: 'https://via.placeholder.com/800x400',
    data: {
      email: 'johndoe@example.com',
      phone: '+1 123 456 7890',
      location: 'New York, USA',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  };
  
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-4">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <img className="h-48 w-full object-cover" src={user.backgroundPic} alt="User background" />
        <div className="px-4 py-5 sm:px-6">
          <div className="-mt-16 flex justify-center">
            <img className="h-32 w-32 rounded-full object-cover border-4 border-white" src={user.profilePic} alt="User profile" />
          </div>
          <div className="text-center mt-4">
            <h3 className="text-xl font-medium leading-6 text-gray-900">{user.name}</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{user.data.email}</p>
              <p className="text-sm text-gray-500">{user.data.phone}</p>
              <p className="text-sm text-gray-500">{user.data.location}</p>
            </div>
          </div>
          <div className="mt-5">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={() => setShowBio(!showBio)}
            >
              {showBio ? 'Hide bio' : 'Show bio'}
            </button>
            {showBio && (
              <p className="text-gray-500 text-sm mt-2">{user.data.bio}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
