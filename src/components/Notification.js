import { FaBell } from 'react-icons/fa';
import { useState , useEffect } from 'react';
import { getStdNotifcations } from './Firebase/SaveData';


function Notification() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const notification1 = [
    { id: 1, message: 'Your payment of $500 has been received' },
    { id: 2, message: 'You have been accepted to the University of California, Los Angeles' },
    { id: 3, message: 'Your payment of $400 is due on April 1, 2023' },
    { id: 4, message: 'New message from John' },
    { id: 5, message: 'You have a meeting at 2pm today' },
  ];

  useEffect(() => {
    const stdEmail = sessionStorage.getItem('studentEmail')
    if(stdEmail){
      getStdNotifcations(stdEmail, setNotifications);
      // setNotifications(notification1);
    }
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 my-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Notifications</h2>
        <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={() => setShowNotifications(!showNotifications)}>
          {showNotifications ? 'Hide All' : 'View All'}
        </button>
      </div>
      {showNotifications && (
        <div className="mt-6">
          {notifications?.map((notification, index) => (
            <div key={index} className="flex items-center py-2">
              <div className="bg-gray-100 flex-shrink-0 rounded-md p-2">
                <FaBell className="h-6 w-6 text-gray-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{notification}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {!showNotifications && (
        <div className="mt-6">
          <p className="text-sm font-medium text-gray-900">You have {notifications?notifications.length: 'no'} notifications</p>
        </div>
      )}
    </div>
  );
}

export default Notification;
