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
            <Message key={message.id} message={message}/>

        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.state.messages.map(message => Home.renderMessage(message));

        return (
            <div class="container content">
                <div class="row">
                    <div id="main-container">
                        <div class="container">
                            <div class="row">
                                <div id="main" class="col">
                                    <h3 class="text-center">Latest Messages</h3>
                                    <hr/>
                                    <div class = "latest">
                                        {contents}
                                    </div>
                                </div>


                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div class="card">
                                        <div class="card-header">Chat</div>
                                        <div class="card-body height5">
                                            <ul class="chat-list">
                                                <li class="in">
                                                    <div class="chat-img">
                                                        <img alt="Avtar"
                                                             src="https://bootdey.com/img/Content/avatar/avatar2.png"/>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <h5>Jimmy Willams</h5>
                                                            <p>Raw denim heard of them tofu master cleanse</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="out">
                                                    <div class="chat-img">
                                                        <img alt="Avtar"
                                                             src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <h5>Serena</h5>
                                                            <p>Next level veard</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="in">
                                                    <div class="chat-img">
                                                        <img alt="Avtar"
                                                             src="https://bootdey.com/img/Content/avatar/avatar2.png"/>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <h5 class="name">Jimmy Willams</h5>
                                                            <p>Will stumptown scenes coffee viral.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="out">
                                                    <div class="chat-img">
                                                        <img alt="Avtar"
                                                             src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <h5>Serena</h5>
                                                            <p>Tofu master best deal</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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


