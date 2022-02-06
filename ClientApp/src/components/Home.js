import React, {Component} from 'react';
import Message from './Message';

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
            <>
                <Message key={message.id} message={message} />
            </>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.state.messages.map(message => Home.renderMessage(message));

        return (
            <div id="main-container">
                <div id="main">
                    <h1 class="text-center">Latest Messages</h1>
                    <hr />
                    {contents}
                </div>
            </div>
        );
    }

    async populateMessage() {
        const response = await fetch('user');
        const data = await response.json();
        this.setState({messages: data, loading: false});
    }
}


