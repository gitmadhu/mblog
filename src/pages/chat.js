import React, { useState, useRef } from 'react';
import '../css/ChatApp.css';
const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  const handlePaste = (event) => {
    const clipboardData = event.clipboardData || window.clipboardData;
    const items = clipboardData.items;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.kind === 'file' && item.type.includes('image')) {
        const file = item.getAsFile();
        if (file) {
          const newMessage = {
            text: inputRef.current.innerText,
            image: file,
          };
          setMessages((prevMessages) => [...prevMessages, newMessage]);
          inputRef.current.innerText = '';
        }
      }
    }
  };

  const handleSendMessage = () => {
    const text = inputRef.current.innerText.trim();
    if (text) {
      const newMessage = {
        text: text,
        image: null,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      inputRef.current.innerText = '';
    }
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message.text && <p>{message.text}</p>}
            {message.image && (
              <img src={URL.createObjectURL(message.image)} alt="Shared" />
            )}
          </div>
        ))}
      </div>
      <div className="input">
        <div
          ref={inputRef}
          className="text-field"
          contentEditable="true"
          onPaste={handlePaste}
        ></div>
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
