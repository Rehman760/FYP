import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Notification from '../Notification';
import Opportunities from './Opportunities';

function Navbar({ name }) {
  const {state} = useLocation();
  return (
    <nav className="bg-white shadow">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <h1 className="text-lg font-bold text-gray-800">Student Dashboard</h1>
        </div>
        <div className="flex items-center">
          <div className="ml-4 flex items-center">
            <h2 className="ml-2 text-md font-medium text-gray-800">{`Hello, ${state.email}`}</h2>
            <img className="w-8 h-8 rounded-full border-2 border-green-500" src="https://dummyimage.com/100x100/000/fff" alt="User"/>
          </div>
        </div>
      </div>
    </div>
  </nav>
  
  
  );
}

function UniversityList() {
  const universities = [    { id: 1, name: 'University of California, Los Angeles' },    { id: 2, name: 'University of California, Berkeley' },    { id: 3, name: 'University of California, San Diego' },    { id: 4, name: 'University of California, Santa Barbara' },  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 my-4">
      <h2 className="text-xl font-bold mb-4">My Universities</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="text-left text-gray-600 uppercase font-medium text-sm">Name</th>
              <th className="text-left text-gray-600 uppercase font-medium text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {universities.map(university => (
              <tr key={university.id} className="border-b border-gray-200">
                <td className="text-left py-2 text-gray-800">{university.name}</td>
                <td className="text-left py-2 text-green-600 font-medium">Enrolled</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


function PaymentList() {
  const payments = [
    { id: 1, amount: '$500', date: 'March 1, 2023' },
    { id: 2, amount: '$400', date: 'February 1, 2023' },
    { id: 3, amount: '$300', date: 'January 1, 2023' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 my-4">
      <h2 className="text-xl font-bold mb-4">My Payments</h2>
      <ul className="list-disc list-inside">
        {payments.map(payment => (
          <li key={payment.id} className="mb-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-600">{`Payment of ${payment.amount}`}</p>
              <p className="text-sm text-gray-500">{payment.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Dashboard() {
  const name = 'John Doe';
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar name={name} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <UniversityList />
          </div>
          <div className="col-span-1">
            <PaymentList />
          </div>
          <div className="col-span-2">
            <Notification />
            <Opportunities />
          </div>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 639px) {
            .grid {
              grid-template-columns: repeat(1, minmax(0, 1fr));
            }
            .col-span-1, .col-span-2 {
              grid-column: 1 / -1;
            }
          }
          @media (min-width: 640px) and (max-width: 767px) {
            .grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            .col-span-1, .col-span-2 {
              grid-column: auto;
            }
          }
          @media (min-width: 768px) and (max-width: 1023px) {
            .grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
          @media (min-width: 1024px) {
            .grid {
              grid-template-columns: repeat(4, minmax(0, 1fr));
            }
          }
        `}
      </style>
    </div>
  );
}

 
  
  export default Dashboard;
