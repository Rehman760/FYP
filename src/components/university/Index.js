import React from 'react';
import Navbar from './Navbar';
import MainSection from './MainSection';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function UniversityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet/>
      {/* <MainSection /> */}
      <Footer />
    </div>
  );
}

export default UniversityPage;
