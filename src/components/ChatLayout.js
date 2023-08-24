import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';

function ChatLayout() {
  const [email, setEmail] = useState();
  return (
    <div className="flex">
      <div className="flex-1/3">
        <ChatList setEmail={setEmail}/>
      </div>
      <div className="flex-grow">
        <ChatWindow email={email}/>
      </div>
    </div>
  );
}

export default ChatLayout;