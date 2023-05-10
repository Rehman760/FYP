import React from 'react';
import { FaGraduationCap, FaMoneyBillWave, FaBook, FaBriefcase } from 'react-icons/fa';

function StudentProfile(props) {
  const { name, education, marks, income, hometown, hobbies, imageUrl } = props;

  return (
    <div className="bg-green-100 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">{name}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-green-700 sm:text-4xl">
            Student Profile
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Here's some information about me!
          </p>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-center">
            <img className="h-62 w-56 rounded-full" src="https://dummyimage.com/100x100/000/fff" alt="" />
          </div>
          <dl className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <FaGraduationCap className="absolute h-8 w-8 text-green-500" />
                <p className="ml-12 text-lg leading-6 font-medium text-gray-900">{education}</p>
              </dt>
              <dd className="mt-2 ml-12 text-base text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <FaMoneyBillWave className="absolute h-8 w-8 text-green-500" />
                <p className="ml-12 text-lg leading-6 font-medium text-gray-900">Annual Income</p>
              </dt>
              <dd className="mt-2 ml-12 text-base text-gray-500">{income}</dd>
            </div>

            <div className="relative">
              <dt>
                <FaBook className="absolute h-8 w-8 text-green-500" />
                <p className="ml-12 text-lg leading-6 font-medium text-gray-900">Academic Achievements</p>
              </dt>
              <dd className="mt-2 ml-12 text-base text-gray-500">{marks}</dd>
            </div>

            <div className="relative">
              <dt>
                <FaBriefcase className="absolute h-8 w-8 text-green-500" />
                <p className="ml-12 text-lg leading-6 font-medium text-gray-900">Hometown &amp; Hobbies</p>
              </dt>
              <dd className="mt-2 ml-12 text-base text-gray-500">{hometown}, {hobbies}</dd>
            </div>
          </dl>
        </div>
        
        <div className="mt-10 text-center">
          <a href="#" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Contact {name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
