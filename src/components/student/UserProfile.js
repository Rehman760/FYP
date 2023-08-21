import React, { useEffect, useState } from 'react';
import InputField from './InputField';
import { getImage, getProfile, saveProfile } from '../Firebase/SaveData';

const UserProfile = () => {
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({
      profileImage: '',
      firstname:'',
      secondname:'',
      email:'' 
    }); 
    const myemail = sessionStorage.getItem('studentEmail');


    useEffect(()=>{
      if(myemail){
        getProfile(myemail, function(data){
          setProfile({...data, email:myemail});
        })
      }
    }, [])


  const handleValue = (e)=>{
    const key = e.target.name;
    const value = e.target.value;

    if(key === 'profileImage'){
        setProfile({...profile, [key]:e.target.files[0]});
        return;
    }
    setProfile({...profile, [key]:value})
    

  }

  const handleSave = ()=>{
    saveProfile(profile, myemail, function(value){
        setLoading(value);
    });
    
  }


  return (
    <div className="p-6 rounded-lg shadow-md">
      <h2 className="flex justify-content-center text-lg font-semibold mb-4">Edit your Profile</h2>
      <div className="flex items-center mb-4">
        <label htmlFor="profile-image" className="w-32 mr-4">
          <strong>Profile Image: </strong>
        </label>
        <div className="flex items-center">
          <input
            type="file"
            id="profile-image"
            name='profileImage'
            onChange={handleValue}
            className="hidden md:w-1/2"
          />
          <label
            htmlFor="profile-image"
            className="bg-green-500 text-white px-3 py-2 rounded cursor-pointer"
          >
            Upload Profile Image
          </label>
          {profile?.profileImage && (
            <div className="ml-4 flex items-center">
              <img
                src={URL.createObjectURL(profile?.profileImage)}
                alt="Profile"
                className="w-16 h-16 object-cover rounded-full"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center mb-4">
        <label htmlFor="email" className="w-32 mr-4">
          <strong>Email:</strong>
        </label>
        <InputField
          type="email"
          id='email'
          value={profile?.email}
          name="email"
          placeholder="Enter email"
          onChange={handleValue}
        />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="firstname" className="w-32 mr-4">
          <strong>Firstname </strong>
        </label>
        <InputField
          type="text"
          name="firstname"
          value={profile?.firstname}  
          placeholder="Enter Firstname"
          onChange={handleValue}
        />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="phone" className="w-32 mr-4">
          <strong>Secondname: </strong>
        </label>
        <InputField
          type="text"
          name="secondname"
          value={profile?.secondname}
          placeholder="Enter Secondname"
          onChange={handleValue}
        />
      </div>
      {loading?<button className='btn btn-primary' disabled={true}>Loading...</button>:<button className='btn btn-primary' onClick={handleSave}>Save</button>}
    </div>
  );
};

export default UserProfile;



// import React, { useState } from 'react';

// const UserProfile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [name, setName] = useState('John Doe');
//   const [email, setEmail] = useState('john.doe@example.com');
//   const [bio, setBio] = useState('This is my profile bio.');

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     setIsEditing(false);
//     // Save data to backend or perform any other necessary actions here

//   };

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p>
//         <strong>Name:</strong>
//         {isEditing ? (
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         ) : (
//           <span>{name}</span>
//         )}
//       </p>
//       <p>
//         <strong>Email:</strong>
//         {isEditing ? (
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         ) : (
//           <span>{email}</span>
//         )}
//       </p>
//       <p>
//         <strong>Bio:</strong>
//         {isEditing ? (
//           <textarea
//             value={bio}
//             onChange={(e) => setBio(e.target.value)}
//           />
//         ) : (
//           <span>{bio}</span>
//         )}
//       </p>
//       {isEditing ? (
//         <button onClick={handleSave}>Save</button>
//       ) : (
//         <button onClick={handleEdit}>Edit</button>
//       )}
//     </div>
//   );
// };

// export default UserProfile;
