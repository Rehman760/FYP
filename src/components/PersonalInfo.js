import React from 'react';
import SelfInfo from './SelfInfo';
import BioInfo from './BioInfo';
import FatherInfo from './FatherInfo';
import AddressInfo from './AddressInfo';
import NationalityInfo from './NationalityInfo';

function PersonalInfo() {
  return (
    <div className="bg-green-50 p-8 rounded-lg shadow-md">
      <SelfInfo />
      <hr className="my-8" />
      <BioInfo />
      <hr className="my-8" />
      <FatherInfo />
      <hr className="my-8" />
      <AddressInfo />
      <hr className="my-8" />
      <NationalityInfo />
    </div>
  );
}

export default PersonalInfo;
