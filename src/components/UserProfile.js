import React, { useEffect, useState } from 'react';
import { getFormData, getProfileImage } from './Firebase/SaveData';

const UserProfile = () => {
  const [showBio, setShowBio] = useState(false);
  const stdEmail = sessionStorage.getItem('studentEmail');
  const [data, setData] = useState({});
  const [imageURL, setImageURL] = useState('https://via.placeholder.com/150');
  const backgroundPic =  "https://images.pexels.com/photos/4064305/pexels-photo-4064305.jpeg?auto=compress&cs=tinysrgb&w=600";
  // const user = {
  //   name: 'John Doe',
  //   profilePic: 'https://via.placeholder.com/150',
  //   data: {
  //     email: 'johndoe@example.com',
  //     phone: '+1 123 456 7890',
  //     location: 'New York, USA',
  //     bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  //   }
  // };

  useEffect(()=>{
    getProfileImage(stdEmail, setImageURL);
    getFormData(stdEmail, function(data){
      const name = data?.personalInfo?.selfData?.name;
      const phone = data?.personalInfo?.selfData?.phone;
      const address = data?.personalInfo?.addressData;
      const location = address.city+", "+address?.stateProvince+", "+address?.country;
      const bio = 'No description found';

      setData({name, phone, location, bio});

    });

  }, [])
  
  

  return (
    <div className="max-w-md mx-auto mt-4">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <img className="h-48 w-full object-cover" src={backgroundPic} alt="User background" />
        <div className="px-4 py-5 sm:px-6">
          <div className="-mt-16 flex justify-center">
            <img className="h-32 w-32 rounded-full object-cover border-4 border-white" src={imageURL} alt="User profile" />
          </div>
          <div className="text-center mt-4">
            <h3 className="text-xl font-medium leading-6 text-gray-900">{data?.name}</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{data?.email}</p>
              <p className="text-sm text-gray-500">{data?.phone}</p>
              <p className="text-sm text-gray-500">{data?.location}</p>
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
              <p className="text-gray-500 text-sm mt-2">{data?.bio}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
