import React from 'react';

const PaymentPage = () => {
  // Dummy data
  const donorName = "John Doe";
  const studentName = "Abdul Rehman";
  const amount = 500;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-500">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-green-500 mb-4">Payment Details</h1>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col mb-4 md:mb-0">
            <p className="text-lg font-medium mb-1">Donor Name</p>
            <p className="text-gray-600">{donorName}</p>
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <p className="text-lg font-medium mb-1">Student Name</p>
            <p className="text-gray-600">{studentName}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-medium mb-1">Amount</p>
            <p className="text-gray-600">${amount}</p>
          </div>
        </div>
        <div className="mt-8">
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm Payment</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
