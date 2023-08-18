import React, { useEffect, useState } from 'react';
import { FaGraduationCap, FaMoneyBillWave, FaBook, FaBriefcase } from 'react-icons/fa';
import { useLocation, useNavigate} from 'react-router-dom';
import { getImage, getProfileData } from '../Firebase/SaveData';

function StudentProfile(props) {
  // const { name, education, marks, income, hometown, hobbies, imageUrl } = props;
  const [profile, setProfile] = useState();
  const [student, setStudent] = useState({});
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const {state} = location;

  useEffect(function(){
    let email = '';
    if(state?.stdEmail === undefined){
      email = 'dani@gmail.com';
    }    
    else{
      email = state?.stdEmail;
    }
    getImage(email, setImage);
    getProfileData(email, function(data){
      console.log(data);
      const profile = {};
      profile['name'] = data?.personalInfo?.selfData?.name;
      profile['uni'] = `${data?.educationInfo?.schoolName} & ${data?.educationInfo?.graduationYear}`;
      profile['income'] = data?.familyInfo?.annualIncome;
      profile['achievement'] = data?.otherInfo?.achievements;
      profile['hobby'] = data?.otherInfo?.hobbies;
      profile['hometown'] = data?.personalInfo?.addressData?.city;
      setProfile(profile)
      setStudent(data);
    });
    
  },[]);

  function donateFunction(e){
    alert('The student is succesfully sponsored by you.');
    //Navigate to the sponosred student page.
    console.log(state);
    // saveSponsoredStudent(state?.donorEmail, state?.stdEmail, student);
    // navigate('/donor/nav-bar/notification');
    sessionStorage.setItem('stdEmail', state?.stdEmail);
    sessionStorage.setItem('student', JSON.stringify(student));
    navigate("/donor/donate");

  }

  return (
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-12">
          <div className="lg:text-center">
            <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">{profile?.name}</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-green-500 sm:text-4xl">
              Student Profile
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Here's some information about me!
            </p>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-center">
              <img className="h-62 w-56 rounded-full" src={image} alt="" />
            </div>
            <dl className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <FaGraduationCap className="absolute h-8 w-8 text-green-500" />
                  <p className="ml-12 text-lg leading-6 font-medium text-gray-900">University &amp; Graduation year</p>
                </dt>
                <dd className="mt-2 ml-12 text-base text-gray-500">
                  {profile?.uni}
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <FaMoneyBillWave className="absolute h-8 w-8 text-green-500" />
                  <p className="ml-12 text-lg leading-6 font-medium text-gray-900">Annual Income</p>
                </dt>
                <dd className="mt-2 ml-12 text-base text-gray-500">{profile?.income}</dd>
              </div>

              <div className="relative">
                <dt>
                  <FaBook className="absolute h-8 w-8 text-green-500" />
                  <p className="ml-12 text-lg leading-6 font-medium text-gray-900">Academic Achievements</p>
                </dt>
                <dd className="mt-2 ml-12 text-base text-gray-500">{profile?.achievement}</dd>
              </div>

              <div className="relative">
                <dt>
                  <FaBriefcase className="absolute h-8 w-8 text-green-500" />
                  <p className="ml-12 text-lg leading-6 font-medium text-gray-900">Hometown &amp; Hobbies</p>
                </dt>
                <dd className="mt-2 ml-12 text-base text-gray-500">{profile?.hometown}, {profile?.hobby}</dd>
              </div>
            </dl>
          </div>
          
          <div className="mt-10 text-center">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-3">
              Contact {profile?.name}
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={donateFunction}>
              Donate {profile?.name}
            </button>
          </div>
          
        </div>
    </div>
  );
}

export default StudentProfile;
