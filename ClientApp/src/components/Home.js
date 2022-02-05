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
      }
  ];

  return (
    <div>
        <Header />
        <Feed messages={testMessages} />
        <Footer />
    </div>
  );
}

export default Home;