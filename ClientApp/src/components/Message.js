import React from 'react';
import './Sidebar.css';


function Message({ message }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{message.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted ">from {message.platform} at {message.messageReceived.latestTimestamp}</h6>
        <p className='card-text'>{message.messageReceived.latestMessage}</p>
      </div>
    </div>
  );
};

export default Message;