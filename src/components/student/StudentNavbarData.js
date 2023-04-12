import { FaAccessibleIcon, FaBookOpen, FaCalendar, FaDelicious, FaInbox, FaLock, FaMoneyBill, FaRegistered } from 'react-icons/fa';
import Dashboard from './Dashboard';
import StudentProfile from './StudentProfile';
import Notification from '../Notification';
import PersonalInfo from './PersonalInfo';
import StudentInformation from './StudentInformation';


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
        body:<h1>Not Available yet</h1>
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
        body:<h1>Payment</h1>
    },
    {
        title:'Notifications',
        icons:<FaInbox/>,
        link:'notification',
        body:<Notification/>
    },

    {
        title:'Information',
        icons:<FaBookOpen/>,
        link:'information',
        body:<h1>Information</h1>
    },

    {
        title:'Profile',
        icons:<FaAccessibleIcon/>,
        link:'profile',
        body:<StudentProfile/>
    },

    {
        title:'Logout',
        icons:<FaLock/>,
        link:'/',
        body:'Exit'
    }
]

export function getBody(searchlink){
    return StudentNavbarData.find(({link})=> link===searchlink)

}
