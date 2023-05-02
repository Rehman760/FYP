import React from 'react';
import { useParams } from 'react-router-dom';
import Notification from '../Notification';
import Opportunities from './Opportunities';
import UserProfile from '../UserProfile';

// export function Navbar({ email }) {
//   const [isOpenHumSign , setOpenHumSign] = useState(false);
//   return (
//     // top-0 z-100 
//     <nav className="fixed w-full bg-white shadow">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//       <div className="flex items-center justify-between h-16">
//         <div>
//             <Hamburger toggled={isOpenHumSign} toggle={setOpenHumSign} size={20}/>
//         </div>
//         <div className="flex-shrink-0">
//           <h1 className="text-lg font-bold text-gray-800">Student Dashboard</h1>
//         </div>
//         <div className="flex items-center">
//           <div className="ml-4 flex items-center">
//             <h2 className="ml-2 text-md font-medium text-gray-800">{`Hello, ${email}`}</h2>
//             <img className="w-8 h-8 rounded-full border-2 border-green-500" src="https://dummyimage.com/100x100/000/fff" alt="User"/>
//           </div>
//         </div>
//       </div>
//     </div>
//   </nav>
   
  
//   );
// }


function PaymentList() {
  const payments = [
    { id: 1, amount: '$500', date: 'March 1, 2023' },
    { id: 2, amount: '$400', date: 'February 1, 2023' },
    { id: 3, amount: '$300', date: 'January 1, 2023' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 my-4">
      <h2 className="text-xl font-bold mb-4">My Payments</h2>
      <ul className="list-disc list-inside">
        {payments.map(payment => (
          <li key={payment.id} className="mb-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-600">{`Payment of ${payment.amount}`}</p>
              <p className="text-sm text-gray-500">{payment.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompleteProfile() {
  return (
    <div className="bg-white border border-green-500 rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4">
        <h2 className="text-green-500 text-2xl font-bold">Complete Your Profile</h2>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-gray-700 text-lg mb-4 text-center">
          To get the most out of our platform, we need you to complete your personal information. Please click the button below to get started.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">
          Continue
        </button>
      </div>
    </div>
  );
}



const applications = [
  { id: 1, form: 'Form 1', program: 'Program 1', university: 'University 1', status: 'Pending' },
  { id: 2, form: 'Form 2', program: 'Program 2', university: 'University 2', status: 'Accepted' },
  { id: 3, form: 'Form 3', program: 'Program 3', university: 'University 3', status: 'Rejected' },
];


  

function Dashboard() {
  // sessionStorage.setItem("email", state?.email);
  console.log(useParams());
  
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <Navbar email={state?.email} /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className='col-span-1'>
          <UserProfile/>
          </div>
          <div className="col-span-1">
            <PaymentList />
          </div>
          <div className="col-span-2">
            <Notification />
            <Opportunities />
          </div>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 639px) {
            .grid {
              grid-template-columns: repeat(1, minmax(0, 1fr));
            }
            .col-span-1, .col-span-2 {
              grid-column: 1 / -1;
            }
          }
          @media (min-width: 640px) and (max-width: 767px) {
            .grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            .col-span-1, .col-span-2 {
              grid-column: auto;
            }
          }
          @media (min-width: 768px) and (max-width: 1023px) {
            .grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
          @media (min-width: 1024px) {
            .grid {
              grid-template-columns: repeat(4, minmax(0, 1fr));
            }
          }
        `}
      </style>
    </div>
  );
}


  
export default Dashboard;

