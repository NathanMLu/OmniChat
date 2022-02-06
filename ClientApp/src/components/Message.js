import React from 'react';
import './Sidebar.css';


function Message({ message }) {
  return (
    <p>{message.messageReceived.latestMessage}</p>
  );
};

export default Message;