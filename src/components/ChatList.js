import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getChatList, getProfile, setChatNotification } from './Firebase/SaveData';

// const dummyChats = [
//   { id: 'chat1', name: 'Chat 1', image: 'user1.jpg', userName: 'User 1' },
//   { id: 'chat2', name: 'Chat 2', image: 'user2.jpg', userName: 'User 2' },
//   { id: 'chat3', name: 'Chat 3', image: 'user3.jpg', userName: 'User 3' },
// ];

function ChatList({setEmail}) {
  const [dummyChats, setChats] = useState([]);

  useEffect(()=>{
    getChatList(setChats);
  }, []);

  const handleItemClick = (e)=>{
    e.preventDefault();
    const index = Number(e.target.id) -1;
    const email = dummyChats[index].email;
    console.log(email);  
    // SEt chat with donor Email
    setChatNotification(email, sessionStorage.getItem('donorEmail'));
    setEmail(email);
  }
  return (
    <div className="bg-gray-100 chat-list p-4">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Chat List</h1>
      <ul>
        {dummyChats?.map((chat) => (
          <li key={chat.id} className="mb-2 flex items-center">
            {/* <Link
              to={`/chat/${chat.id}`}
              className="flex items-center space-x-2 bg-white py-2 px-4 rounded-lg hover:bg-gray-200"
            > */}
            <button id={chat.id} className="flex items-center space-x-2 bg-white py-2 px-4 rounded-lg hover:bg-gray-200" onClick={handleItemClick}>
              <div id={chat.id} className="rounded-full overflow-hidden h-10 w-10">
                <img src={`${chat.image}`} alt={chat.userName} className="w-full h-full object-cover" />
              </div>
              <span id={chat.id}className="text-gray-800">{chat.userName}</span>
            </button>
            {/* </Link> */}
          </li>
        ))}
      </ul>
      <Outlet/>
    </div>
  );
}

export default ChatList;
