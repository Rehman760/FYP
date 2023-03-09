import { useState } from 'react';
import InputField from './InputField';

const ExpendituresInfo = () => {
  const [tuitionFee, setTuitionFee] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [booksAndSupplies, setBooksAndSupplies] = useState('');
  const [transportation, setTransportation] = useState('');
  const [otherExpenses, setOtherExpenses] = useState('');

  const handleNextPage = () => {
    // Save data to database and move to next page
  };

  const handlePreviousPage = () => {
    // Move to previous page
  };
  return (
    <div className="bg-green-50 py-8 px-4 sm:px-6 lg:px-8">
      <p className="mt-1 text-sm text-gray-500">
        Please enter your estimated expenses for the following items.
      </p>

      <div className="grid grid-cols-6 gap-6 mt-6">
        <InputField
          label="Tuition fee"
          type="number"
          placeholder="Enter amount"
          value={tuitionFee}
          onChange={(e) => setTuitionFee(e.target.value)}
        />
        <InputField
          label="Accommodation"
          type="number"
          placeholder="Enter amount"
          value={accommodation}
          onChange={(e) => setAccommodation(e.target.value)}
        />
        <InputField
          label="Books and supplies"
          type="number"
          placeholder="Enter amount"
          value={booksAndSupplies}
          onChange={(e) => setBooksAndSupplies(e.target.value)}
        />
        <InputField
          label="Transportation"
          type="number"
          placeholder="Enter amount"
          value={transportation}
          onChange={(e) => setTransportation(e.target.value)}
        />
        <InputField
          label="Other expenses"
          type="number"
          placeholder="Enter amount"
          value={otherExpenses}
          onChange={(e) => setOtherExpenses(e.target.value)}
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
          Next
        </button>
      </div>
    </div>
  );
};

export default ExpendituresInfo;
