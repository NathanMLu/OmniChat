import React, {Component} from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {messages: [], loading: true};
    }

    componentDidMount() {
        this.populateMessage();
    }

    static renderMessage(message) {
        return (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{message.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted ">from {message.platform} at {message.messageReceived.latestTimestamp}</h6>
                <p className="card-text">{message.messageReceived.latestMessage}</p>
              </div>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.state.messages.map(message => Home.renderMessage(message));

        return (
            <div>
                <h1>Testing Message Data</h1>
                <p>trying to get data from c# backend.</p>
                {contents}
            </div>
        );
    }

    async populateMessage() {
        const messagesArr = [];
        const response = await fetch('user');
        messagesArr.push(await response.json());
        console.log(messagesArr)
        this.setState({messages: messagesArr, loading: false});
    }
}


