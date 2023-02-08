import React from 'react'
import Navbar from './Navbar'
import MainSection from './MainSection'
import AboutUs from './AboutUs'
import Services from './Services'
import Contact from './Contact'
import StudentInformation from './StudentInformation'

const HomePage = () => {
  return (
    <>
    {/* <StudentInformation /> */}
      <MainSection />
      <AboutUs />
      <Services />
      <Contact />
    </>
  )
}

export default HomePage
