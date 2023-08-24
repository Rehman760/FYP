import React, { useState, useEffect } from 'react';
import { addMessageChat, getMessgesChat } from '../Firebase/SaveData';
import { FiSend } from 'react-icons/fi';

function ChatWindow() {
    const studentEmail = sessionStorage.getItem('studentEmail');
    const [donorEmail, setDonorEmail] = useState('');
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);


  useEffect(()=>{
    getMessgesChat(studentEmail, (messages)=>{
        console.log(messages+' <-Messages ');
        setMessages(messages)
      }, function(email){
        setDonorEmail(email)
        setShowMessage(true);
      });
  }, [])



  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      //Save message to the messages in the chat
      addMessageChat(studentEmail,{ id: Date.now(), text: newMessage, sender: 'reciever' });
      setMessages([...messages, { id: Date.now(), text: newMessage, sender: 'reciever' }]);
      setNewMessage('');
    }
  };  

  const chatComp = <>
    <h1 className="text-2xl font-bold text-gray-800 mb-4">Chat with: {donorEmail}</h1>
      <div className="bg-gray-100 p-4 rounded-lg">
        {messages?.map((message) => (
          <div
            key={message.id}
            className={`mb-2 p-2 rounded-lg ${
              message.sender === 'reciever' ? 'bg-green-500 text-white self-end' : 'bg-white text-gray-800 self-start'
            }`}
          >
            {
                message.text
            }
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full rounded-md p-2 pr-10"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="absolute right-2 top-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            onClick={handleSendMessage}
          >
            <FiSend size={20} />
          </button>
        </div>
      </div>
  </>
  
  return (
    <div className="bg-white chat-window p-4">
        {showMessage
        ? chatComp : <h1>Not Chat! Becuase, donor has not started chat to you.</h1>        
        }
      
    </div>
  );
}

export default ChatWindow;
