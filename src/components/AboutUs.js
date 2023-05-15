import React from 'react';
import { useSpring, animated } from 'react-spring';
import AboutImg1 from './images/mission3.jpg';
import AboutImg2 from './images/mission.jpg';

const AboutUs = () => {
  const containerAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-100px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
  });

  return (
    <section className="py-12">
      <animated.div className="container mx-auto" style={containerAnimation}>
        <h2 className="text-3xl font-medium mb-4 flex justify-center">About Us</h2>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src={AboutImg1} alt="about-img-1" className="w-full h-48 rounded-lg object-cover" />
              <h3 className="text-xl font-medium mt-4 mb-2">Our Mission</h3>
              <p className="text-base mb-4">
                We are committed to providing financial assistance to students in need, bridging the gap between donors and those in need of education.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src={AboutImg2} alt="about-img-2" className="w-full h-48 rounded-lg object-cover" />
              <h3 className="text-xl font-medium mt-4 mb-2">Our Vision</h3>
              <p className="text-base mb-4">
                We strive to ensure that every student, regardless of their financial background, has access to the education they deserve.
              </p>
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default AboutUs;
