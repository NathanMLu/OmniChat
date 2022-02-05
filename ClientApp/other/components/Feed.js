import React from 'react';
import Message from './Message';

const Feed = (message) => {
    return (
        <main>
            <Message>
                title={message.title}
                content={message.content}
            </Message>
        </main>
    );
}

export default Feed;
