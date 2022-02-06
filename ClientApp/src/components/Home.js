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
            <div>
                <h1>test</h1>

                <p>
                    {message.name}
                    {message.platform}
                    {message.id}
                </p>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderMessage(this.state.messages);

        return (
            <div>
                <h1>Testing Message Data</h1>
                <p>trying to get data from c# backend.</p>
                {contents}
            </div>
        );
    }

    async populateMessage() {
        const response = await fetch('user');
        const data = await response.json();
        this.setState({messages: data, loading: false});
    }
}


