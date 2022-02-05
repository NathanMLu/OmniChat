import React from 'react';

const Message = ({ title, content }) => {
  return (
    <div className='card msg'>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
        </div>
    </div>
  );
};

export default Message;
