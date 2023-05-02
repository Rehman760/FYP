import React from 'react';
import Navbar from './Navbar';
import MainSection from './MainSection';
import Footer from './Footer';

function UniversityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  );
}

export default UniversityPage;
