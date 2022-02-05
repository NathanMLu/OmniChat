import React from 'react';
import Message from './Message';

const Feed = ({ messages }) => {
  return (
    <main>
        {messages.map(message => <Message title={message.title} content={message.content} />)}
    </main>
  );
}

export default Feed;
