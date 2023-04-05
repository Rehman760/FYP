import React, { useState } from 'react';
import Notification from '../Notification';
import Opportunities from '../Opportunities';

function Navbar({ name }) {
  return (
    <nav className="bg-white shadow">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <h1 className="text-lg font-bold text-gray-800">Student Dashboard</h1>
        </div>
        <div className="flex items-center">
          <div className="ml-4 flex items-center">
            <img className="w-8 h-8 rounded-full border-2 border-green-500" src="https://dummyimage.com/100x100/000/fff" alt="User" />
            <h2 className="ml-2 text-md font-medium text-gray-800">{`Hello, ${name}`}</h2>
          </div>
        </div>
      </div>
    </div>
  </nav>
  
  
  );
}

function UniversityList() {
  const universities = [
    { id: 1, name: 'University of California, Los Angeles' },
    { id: 2, name: 'University of California, Berkeley' },
    { id: 3, name: 'University of California, San Diego' },
    { id: 4, name: 'University of California, Santa Barbara' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 my-4">
      <h2 className="text-xl font-bold mb-4">My Universities</h2>
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

function NotificationList() {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = [
  { id: 1, message: 'Your payment of $500 has been received' },
  { id: 2, message: 'You have been accepted to the University of California, Los Angeles' },
  { id: 3, message: 'Your payment of $400 is due on April 1, 2023' },
  ];
  
  return (
  <div className="bg-white rounded-lg shadow-lg p-6 my-4">
  <div className="flex items-center justify-between mb-4">
  <h2 className="text-xl font-bold">Notifications</h2>
  <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={() => setShowNotifications(!showNotifications)}>
  {showNotifications ? 'Hide' : 'Show All'}
  </button>
  </div>
  {showNotifications && (
  <ul className="list-disc list-inside">
  {notifications.map(notification => (
  <li key={notification.id} className="mb-4">
  <p className="text-gray-600">{notification.message}</p>
  </li>
  ))}
  </ul>
  )}
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
  </div>
  <div className="col-span-2">
  <Opportunities />
  </div>
  </div>
  </div>
  </div>
  );
  }
  
  export default Dashboard;
