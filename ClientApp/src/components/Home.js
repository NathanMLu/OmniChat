import React from 'react';
import Header from './Header';
import Feed from './Feed';
import Footer from './Footer';

const Home = () => {
  // will depend on the way the data is structured in the backend
  const testMessages = [
      {
          title: "Message 1",
          content: "message text 1"
      },
      {
          title: "Message 2",
          content: "message text 2"
      },
      {
        title: "Message 3",
        content: "message text 3"
    }
  ];

  fetchMessages = async () => {
    const response = await fetch('message-feed');
    return data = await response.json();
  }

  return (
    <div>
        <Header />
        <Feed messages={fetchMessages} />
        <Footer />
    </div>
  );
}

export default Home;