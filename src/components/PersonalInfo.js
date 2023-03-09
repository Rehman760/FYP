import React from 'react';
import SelfInfo from './SelfInfo';
import BioInfo from './BioInfo';
import FatherInfo from './FatherInfo';
import AddressInfo from './AddressInfo';
import NationalityInfo from './NationalityInfo';

function PersonalInfo() {
  const handleNextPage = () => {
    // Save data to database and move to next page
  };

  const handlePreviousPage = () => {
    // Move to previous page
  };
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

      <div className="flex justify-between mt-8">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handlePreviousPage}
        >
          Previous
        </button>
        
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
