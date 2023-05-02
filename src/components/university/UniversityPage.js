import React from 'react';
import Details from './Details';

const Header = ({ username, onLogout }) => {
  return (
    <header className="bg-green-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">{username}</h1>
      <button className="bg-white text-green-600 px-4 py-2 rounded-lg" onClick={onLogout}>Log out</button>
    </header>
  );
};

const Main = () => {
  return (
    <main className="bg-white p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-600 text-white p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">University Details</h2>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel ultrices bibendum, velit sapien lacinia nunc, vel luctus velit velit vel velit. Sed euismod, sapien vel ultrices bibendum, velit sapien lacinia nunc, vel luctus velit velit vel velit.</p>
        </div>
        <Details />
      </div>
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white p-4 text-center">
      <p className="text-sm">This system is designed and developed by XYZ University.</p>
    </footer>
  );
};

const UniversityPage = ({ username, onLogout }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header username={username} onLogout={onLogout} />
      <Main />
      <Footer />
    </div>
  );
};

export default UniversityPage;
