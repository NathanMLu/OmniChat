import React, {Component} from 'react';

export class Home extends Component {
    static displayName = Home.name;

    populateMessages() {
        return [
            {
                name: "Jamey",
                platform: "Discord",
                messageSent: {
                    LatestMessage: "This is message sent from discord",
					LatestTimestamp: new Date()
                }
            }
        ];
    }

    render() {
        return (
            <div>
                <h1>{this.populateMessages()[0].name}</h1>
                <h1>{this.populateMessages()[0].platform}</h1>
                <h1>{this.populateMessages()[0].messageSent.LatestMessage}</h1>
            </div>
        );
    }   
}


