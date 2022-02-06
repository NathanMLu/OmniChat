/*
import React, {Component} from 'react';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = {forecasts: [], loading: true};
    }

    componentDidMount() {
        this.populateMessages();
    }

    static renderMessages(messages) {
        return (
            <div>
                <h1>test</h1>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderMessages(this.state.forecasts);

        return (
            <div>
                <h1>Testing Message Data :(</h1>
                <p>Testing if I can get message data</p>
                {contents}
            </div>
        );
    }

    async populateMessages() {
        const response = await fetch('user');
        const data = await response.json();
        this.setState({forecasts: data, loading: false});
    }
}
*/

import React, {Component} from 'react';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = {forecasts: [], loading: true};
    }

    componentDidMount() {
        this.populateMessages();
    }

    static renderMessages(forecasts) {
        return (
            <div>
                <h1>test</h1>

                <p>
                    {forecasts.name}
                    {forecasts.platform}
                </p>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderMessages(this.state.forecasts);

        return (
            <div>
                <h1>Testing Message Data</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateMessages() {
        const response = await fetch('user');
            // .then(response => response.json())
            // .then(data => {
            //     console.log(data.date);
            // });
        const data = await response.json();
        console.log(data);
        this.setState({forecasts: data, loading: false});
    }
}
