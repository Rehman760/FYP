// src/TabbedSignupPage.js
import React, { useState } from 'react';
import SignUp from './components/SignUp';
import SignUpPage from './components/university/UniversitySignUpPage';

const TabbedSignupPage = () => {
  const [activeTab, setActiveTab] = useState('student');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderActiveSignup = () => {
    switch (activeTab) {
      case 'student':
        return <SignUp />;
      case 'donor':
        return <SignUp />;
      case 'university':
        return <SignUpPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex border-b border-gray-300">
        <button
          className={`flex-1 py-2 px-4 text-center ${
            activeTab === 'student' ? 'bg-blue-500 text-white' : 'text-gray-600'
          }`}
          onClick={() => handleTabClick('student')}
        >
          Student
        </button>
        <button
          className={`flex-1 py-2 px-4 text-center ${
            activeTab === 'donor' ? 'bg-blue-500 text-white' : 'text-gray-600'
          }`}
          onClick={() => handleTabClick('donor')}
        >
          Donor
        </button>
        <button
          className={`flex-1 py-2 px-4 text-center ${
            activeTab === 'university' ? 'bg-blue-500 text-white' : 'text-gray-600'
          }`}
          onClick={() => handleTabClick('university')}
        >
          University
        </button>
      </div>
      <div className="flex-1 p-8 overflow-auto">
        {renderActiveSignup()}
      </div>
    </div>
  );
};

export default TabbedSignupPage;
