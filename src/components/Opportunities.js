import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

function Opportunities() {
  const opportunities = [
    {
      id: 1,
      title: 'Internship at Google',
      description: 'We are looking for a highly motivated individual to join our team as a software engineering intern.',
      deadline: 'April 15, 2023',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Scholarship at Stanford University',
      description: 'We are offering a full scholarship to an outstanding student with demonstrated financial need.',
      deadline: 'May 1, 2023',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Volunteer opportunity at local food bank',
      description: 'We need volunteers to help sort and distribute food to those in need in our community.',
      deadline: 'Ongoing',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">New Opportunities</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Here are some new opportunities that may be of interest to you.</p>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {opportunities.map((opportunity) => (
            <li key={opportunity.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded" src={opportunity.image} alt="" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">{opportunity.title}</h4>
                    <p className="text-sm font-medium text-gray-500">{opportunity.description}</p>
                    <p className="mt-2 text-sm text-gray-500">
                      Deadline: <span className="font-medium">{opportunity.deadline}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <a to={`/opportunities/${opportunity.id}`} className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <FaEye className="mr-1.5 h-5 w-5" />
                    <span>View</span>
                  </a>
                  {/* should use link instead of a tag */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Opportunities;
