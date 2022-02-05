import React from 'react';
import Header from './Header';
import Feed from './Feed';
import Footer from './Footer';

/*
const Home = () => {

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


    const getUser = fetch("user")
        .then((response) => response.json())
        .then((user) => {
            return user.name;
        });
    
    // wait for the fetch data to load first before returning the header feed and footer
    
    async function getMessage() {
        const response = await getUser;

        return (
            <div>
                <Header/>
                <Feed message={getUser}/>
                <Footer/>
            </div>
        );
    }
    
    getMessage();
    
    
    
    

    const awaitUser = async () => {
        const a = await getUser;
        userLoaded = true;
        console.log(a)
    };

    const message = awaitUser();
    if (userLoaded) {
        
    }

    
    
}

 */

export default async function Home() {
    const user = await fetch("user")
        .then((response) => response.json())
        .then((user) => {
            return user.name;
        });
    return (
        <div>
            <Header/>
            <Feed message={user}/>
            <Footer/>
        </div>
    );
}