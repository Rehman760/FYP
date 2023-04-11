import React from 'react'
import Navbar from './Navbar'
import MainSection from './MainSection'
import AboutUs from './AboutUs'
import History from './HistoryPage'
import UniversityPage from './UniversityPage'
import Services from './Services'
import Contact from './Contact'
import StudentInformation from './student/StudentInformation'
import Donors from './Donors'

const HomePage = () => {
  return (
    <>
      <MainSection />
      <AboutUs />
      <History title="Our Students"/>
      <Donors title="Our Donors"/>
      <UniversityPage />
      <Services />
      <Contact />
    </>
  )
}

export default HomePage
