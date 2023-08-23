import { FaAccessibleIcon, FaBookOpen, FaCalendar, FaDelicious, FaInbox, FaLock, FaMoneyBill, FaRegistered } from 'react-icons/fa';
import Dashboard from './Dashboard';
import StudentProfile from './StudentProfile';
import Notification from '../Notification';
import StudentInformation from './StudentInformation';
import UserProfile from './UserProfile';
import Logout from '../Logout';
import ChatList from '../ChatList';
import PaymentNotifcation from './PaymentNotification';

// let email='';

// export function setMyEmail(myemail){
//     email = myemail;
// }

// export function getMyEmail(){
//     return email;
// }

export const StudentNavbarData = [
    {
        title:'Dashboard',
        icons:<FaDelicious/>,
        link:'dashboard',
        body: <Dashboard/>

    },
    {
        title:'Chats',
        icons:<FaCalendar/>,
        link:'chat',
        body: <ChatList/>
    },
    {
        title:'Register',
        icons:<FaRegistered/>,
        link:'form',
        body: <StudentInformation/>
    },
    {
        title:'Payment',
        icons:<FaMoneyBill/>,
        link:'payment',
        body:<PaymentNotifcation/>
    },
    {
        title:'Notifications',
        icons:<FaInbox/>,
        link:'notification',
        body:<Notification/>
    },

    {
        title:'View Profile',
        icons:<FaBookOpen/>,
        link:'information',
        body:<StudentProfile/>
    },

    {
        title:'Edit Profile',
        icons:<FaAccessibleIcon/>,
        link:'profile',
        body:<UserProfile/>
    },

    {
        title:'Logout',
        icons:<FaLock/>,
        link:'logout',
        body:<Logout/>
    }
]

export function getBody(searchlink){
    return StudentNavbarData.find(({link})=> link===searchlink)

}
