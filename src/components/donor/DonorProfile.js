import React, {useState, useEffect} from 'react';
import { FaUser, FaMapMarkerAlt, FaDollarSign, FaMoneyCheck, FaBriefcase } from 'react-icons/fa';
import { getProfile, getProfileImage } from '../Firebase/SaveData';


function DonorProfile(props) {
  const donorEmail = sessionStorage.getItem('donorEmail');
  const { name, address, income, bankAccount, job } = props;
  const [data, setData] = useState({});
  const [imageURL, setImageURL]=useState('');

  useEffect(()=>{
    getProfile(donorEmail, function(data){
      const {otherInfo} = data;
      console.log('HERE');
      console.log(otherInfo);
      setData(otherInfo);
    })
    getProfileImage(donorEmail, setImageURL);

  }, [])


  return (
    <div className="bg-white mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">{data?.name}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-green-500 sm:text-4xl">
            Donor Profile
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Here's some information about me!
          </p>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-center">
            <img className="h-62 w-56 rounded-full" src={imageURL} alt="" />
          </div>
          <dl className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <FaUser className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Name</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">{data?.name}</dd>
            </div>
            

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <FaMapMarkerAlt className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Address</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">{data?.phone}</dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <FaDollarSign className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Annual Income</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">{data?.income}</dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <FaMoneyCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Bank Account</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">{data?.bankAccount}</dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <FaBriefcase className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Job</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">{data?.job}</dd>
            </div>
          </dl>
        </div>
        {/* <div className="mt-10 text-center">
          <a href="#" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Contact {data?.name}
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default DonorProfile;
