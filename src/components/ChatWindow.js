import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';
import { BsFileEarmarkArrowUp } from 'react-icons/bs';

function ChatWindow() {
  const { chatId } = useParams();
  const [messages, setMessages] = useState([]);

  const [newMessage, setNewMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { id: Date.now(), text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // Simulate uploading the selected file
      const newMessage = {
        id: Date.now(),
        text: selectedFile.name,
        sender: 'user',
        isFile: true,
      };
      setMessages([...messages, newMessage]);
      setSelectedFile(null);
    }
  };

  return (
    <div className="bg-white chat-window p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Chat Room: {chatId}</h1>
      <div className="bg-gray-100 p-4 rounded-lg">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-2 p-2 rounded-lg ${
              message.sender === 'user' ? 'bg-green-500 text-white self-end' : 'bg-white text-gray-800 self-start'
            }`}
          >
            {message.isFile ? (
              <div>
                <span className="font-semibold">File: </span>
                <a href="#" className="text-blue-500">
                  {message.text}
                </a>
              </div>
            ) : (
              message.text
            )}
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
        <label
          htmlFor="file-upload"
          className="cursor-pointer sm:ml-4 mt-2 sm:mt-0 flex items-center justify-center"
        >
          <BsFileEarmarkArrowUp size={24} className="text-green-500 hover:text-green-600" />
        </label>
        <input
          type="file"
          accept="image/*, .pdf, .doc, .docx"
          id="file-upload"
          className="hidden"
          onChange={handleFileSelect}
        />
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg mt-2 sm:ml-2 hover:bg-green-600"
          onClick={handleFileUpload}
        >
          Upload File
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
