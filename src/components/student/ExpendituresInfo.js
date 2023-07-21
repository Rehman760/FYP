import { useState } from 'react';
import InputField from './InputField';
import { saveExpenditureInfo } from '../Firebase/SaveData';

const ExpendituresInfo = ({setActiveSection, activeSectionNo}) => {
  const [expInfo, setExpInfo] = useState({});

  const handleNextPage = () => {
    // Save data to database and move to next page
    const email = sessionStorage.getItem('studentEmail');
    saveExpenditureInfo(expInfo, email);
    setActiveSection(activeSectionNo+1);      
    showMe();
  };

  const handlePreviousPage = () => {
    // Move to previous page
    console.log("Previous"+activeSectionNo);
    setActiveSection(activeSectionNo-1);
  };

  const showMe = ()=>{
    console.log(expInfo);
  }

  const handleValueChange = (e)=>{
    const key = e.target.name;
    const value = e.target.value;
    setExpInfo({...expInfo, [key]:value});
  }

  return (
    <div className="bg-green-50 py-4 px-2 sm:py-8 sm:px-6 lg:px-8">
      <p className="mt-1 text-sm text-gray-500 sm:text-base">
        Please enter your estimated expenses for the following items.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 sm:gap-6 mt-4">
        <InputField
          label="Tuition fee"
          type="number"
          name={"tuitionFee"}
          value={expInfo?.tuitionFee}
          placeholder="Enter amount"
          onChange={handleValueChange}
        />
        <InputField
          label="Accommodation"
          type="number"
          name="accommodation"
          value={expInfo?.accommodation}
          placeholder="Enter amount"
          onChange={handleValueChange}
        />
        <InputField
          label="Books and supplies"
          type="number"
          name={"booksAndSupplies"}
          value={expInfo?.booksAndSupplies}
          placeholder="Enter amount"
          onChange={handleValueChange}
        />
        <InputField
          label="Transportation"
          type="number"
          name={"transportation"}
          value={expInfo?.transportation}
          placeholder="Enter amount"
          onChange={handleValueChange}
        />
        <InputField
          label="Other expenses"
          type="number"
          name={"otherExpenses"}
          value={expInfo?.otherExpenses}
          placeholder="Enter amount"
          onChange={handleValueChange}
        />
      </div>

      <div className="flex flex-row sm:flex-row justify-between mt-6">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline sm:mt-0"
          onClick={handlePreviousPage}
        >
          Previous
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline sm:ml-2"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ExpendituresInfo;
