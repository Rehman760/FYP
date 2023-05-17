import React, { useState, useLocation } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { saveSponsoredStudent } from '../Firebase/SaveData';

const banks = [
  { name: 'Bank A', logo: 'https://dummyimage.com/50x50/000/fff', value: 'bankA' },
  { name: 'Bank B', logo: 'https://dummyimage.com/50x50/000/fff', value: 'bankB' },
  { name: 'Bank C', logo: 'https://dummyimage.com/50x50/000/fff', value: 'bankC' },
];

function DonationPage() {

  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  // const location = useLocation();
  // const {state} = location;

 

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    //Save the student to sponsored student and delete it from the available list.
    //and move to the sponosred list.
    const donorEmail = sessionStorage.getItem('donorEmail');
    const stdEmail = sessionStorage.getItem('stdEmail');
    const student = JSON.parse(sessionStorage.getItem('student'));
    console.log(student);
    saveSponsoredStudent(donorEmail, stdEmail, student);
    navigate("/donor/nav-bar/notification");

  };

  return (
    <div className="bg-green-100 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Donate Now</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-green-700 sm:text-4xl">
            Help Support Our Cause
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Your donation will make a difference!
          </p>
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="flex flex-col">
                <label htmlFor="amount" className="text-gray-500 mb-2">Donation Amount</label>
                <div className="flex items-center mb-4">
                  <span className="text-gray-500 mr-2">$</span>
                  <input type="number" id="amount" name="amount" className="border border-gray-300 rounded-md py-2 px-4 mr-2" placeholder="Enter amount" value={amount} onChange={handleAmountChange} />
                </div>
                <label htmlFor="message" className="text-gray-500 mb-2">Message (optional)</label>
                <textarea id="message" name="message" rows="3" className="border border-gray-300 rounded-md py-2 px-4 mb-4" placeholder="Enter message" value={message} onChange={handleMessageChange}></textarea>
                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                  Donate
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-green-500 px-4 py-3">
                <FaCheckCircle className="inline-block h-8 w-8 text-white mr-2" />
                <h3 className="inline-block text-lg font-medium text-white">Thank you for your donation!</h3>
              </div>
              <div className="px-4 py-3">
                <p className="text-gray-500">Your donation of ${amount} has been received. We appreciate your support!</p>
              </div>
              <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={handlePopupClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DonationPage;
