import React, { useState } from "react";
import InputField from "./InputField";

const OtherDetails = () => {
  const [interests, setInterests] = useState("");
  const [achievements, setAchievements] = useState("");
  const [hobbies, setHobbies] = useState("");

  const handleInterestsChange = (event) => {
    setInterests(event.target.value);
  };

  const handleAchievementsChange = (event) => {
    setAchievements(event.target.value);
  };

  const handleHobbiesChange = (event) => {
    setHobbies(event.target.value);
  };
  const handleNextPage = () => {
    // Save data to database and move to next page
  };

  const handlePreviousPage = () => {
    // Move to previous page
  };

  return (
    <div className="bg-green-50 py-8 px-4 sm:px-6 lg:px-8">
    <p className="mt-1 text-sm text-gray-500">
      Please enter your interests, achievements and hobbies  for the following items.
    </p>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <InputField
            label="Interests"
            type="text"
            placeholder="Enter your interests"
            value={interests}
            onChange={handleInterestsChange}
          />
        </div>
        <div>
          <InputField
            label="Achievements"
            type="text"
            placeholder="Enter your achievements"
            value={achievements}
            onChange={handleAchievementsChange}
          />
        </div>
      </div>
      <div className="mt-6">
        <InputField
          label="Hobbies"
          type="text"
          placeholder="Enter your hobbies"
          value={hobbies}
          onChange={handleHobbiesChange}
        />
      </div>

      
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
          Save
        </button>
      </div>
    </div>
  );
};

export default OtherDetails;
