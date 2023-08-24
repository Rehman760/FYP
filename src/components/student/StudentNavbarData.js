import {
    FaTachometerAlt, // Dashboard
    FaComment,       // Chats
    FaUserPlus,      // Register
    FaMoneyBill,     // Payment
    FaBell,          // Notifications
    FaUser,          // View Profile
    FaUserEdit,      // Edit Profile
    FaSignOutAlt,    // Logout
  } from 'react-icons/fa';
  
  import Dashboard from './Dashboard';
  import StudentProfile from './StudentProfile';
  import Notification from '../Notification';
  import StudentInformation from './StudentInformation';
  import UserProfile from './UserProfile';
  import Logout from '../Logout';
  import Chat from './Chat';
  import PaymentNotifcation from './PaymentNotification';
  
  export const StudentNavbarData = [
    {
      title: 'Dashboard',
      icons: <FaTachometerAlt />,
      link: 'dashboard',
      body: <Dashboard />,
    },
    {
      title: 'Chats',
      icons: <FaComment />,
      link: 'chat',
      body: <Chat/>
    },
    {
      title: 'Register',
      icons: <FaUserPlus />,
      link: 'form',
      body: <StudentInformation />,
    },
    {
      title: 'Payment',
      icons: <FaMoneyBill />,
      link: 'payment',
      body: <PaymentNotifcation />,
    },
    {
      title: 'Notifications',
      icons: <FaBell />,
      link: 'notification',
      body: <Notification />,
    },
    {
      title: 'View Profile',
      icons: <FaUser />,
      link: 'information',
      body: <StudentProfile />,
    },
    {
      title: 'Edit Profile',
      icons: <FaUserEdit />,
      link: 'profile',
      body: <UserProfile />,
    },
    {
      title: 'Logout',
      icons: <FaSignOutAlt />,
      link: 'logout',
      body: <Logout />,
    },
  ];
  
  export function getBody(searchlink) {
    return StudentNavbarData.find(({ link }) => link === searchlink);
  }
  