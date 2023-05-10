import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaDollarSign, FaMoneyCheck, FaBriefcase, FaImage, FaUserCircle } from 'react-icons/fa';


function DonorForm({ handleSubmit }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [income, setIncome] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [job, setJob] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', name);
    data.append('address', address);
    data.append('income', income);
    data.append('bankAccount', bankAccount);
    data.append('job', job);
    data.append('phone', phone);
    data.append('email', email);
    data.append('image', image);
    handleSubmit(data);
  }

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-2xl font-medium leading-6 text-green-500">Personal Information</h3>
            <p className="mt-1 text-lg text-gray-600">Please provide your personal information.</p>
          </div>
        </div>
        <div className="mt-2 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmitForm}>
            <div className="grid grid-cols-2 gap-3 m-2">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm ">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full p-2 px-5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full p-2  px-5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                  Phone
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="block w-full p-2  px-5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="income" className="block text-lg font-medium text-gray-700">
                  Annual Income
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaDollarSign className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="number"
                    name="income"
                    id="income"
                    autoComplete="off"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                 className="block w-full p-2 px-5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="bankAccount" className="block text-lg font-medium text-gray-700">
                  Bank Account Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMoneyCheck className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="number"
                    name="bank"
                    id="bank"
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                    className="block w-full p-2  px-5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="job" className="block text-lg font-medium text-gray-700">
                  Job Title
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaBriefcase className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="job"
                    id="job"
                    autoComplete="off"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                    className="block w-full p-2  px-5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="image" className="block text-lg font-medium
php
Copy code
              text-gray-700">
                  Profile Picture
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="flex items-center justify-center py-2 px-3 border border-gray-300 bg-white rounded-md">
                    {image ? (
                      <img
                        src={image}
                        alt="Profile"
                        className="h-20 w-20 object-cover rounded-full"
                      />
                    ) : (
                      <FaUserCircle className="h-12 w-12 text-gray-400" aria-hidden="true" />
                    )}
                    <div className="ml-2 text-sm">
                      <label htmlFor="image" className="font-medium text-green-600 hover:text-green-500">
                        {image ? 'Change' : 'Upload'}
                      </label>
                      <p className="text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      <input
                        type="file"
                        name="image"
                        id="image"
                        autoComplete="off"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="block w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300 ease-in-out"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-green-200 pt-5 ">
              <div className="flex justify-end ">
                <button
                  type="submit"
                  className="ml-3 inline-flex border-green-600 justify-center py-2 px-4 border  border-green-300 shadow-sm text-lg font-medium rounded-md  hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>


  );
}

export default DonorForm;    