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
            <div class="container content pt-lg-5">
                <div class="row">
                    <div id="main-container">
                        <div class="container">
                            <div class="row">
                                <div id="main" class="col">
                                    <h3 class="text-center text-light">Latest Messages</h3>
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
                                                             src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <h5>Oliver Wilcox</h5>
                                                            <p>Have you heard about SBHacks?</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="out">
                                                    <div class="chat-img">
                                                        <img alt="Avtar"
                                                             src="https://bootdey.com/img/Content/avatar/avatar7.png"/>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <h5>Nathan Lu</h5>
                                                            <p>Nah, what's that? Some sort of dancing competition? 💃 lol</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="in">
                                                    <div class="chat-img">
                                                        <img alt="Avtar"
                                                             src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <h5 class="name">Oliver Wilcox</h5>
                                                            <p>It's a 36 hour hackathon where you build a project!</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="out">
                                                    <div class="chat-img">
                                                        <img alt="Avtar"
                                                             src="https://bootdey.com/img/Content/avatar/avatar7.png"/>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <h5>Nathan Lu</h5>
                                                            <p>Ooh, sounds fun, I might have to check it out...</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="out">
                                                    <div class="chat-img">
                                                        <img alt="Avtar"
                                                             src="https://bootdey.com/img/Content/avatar/avatar7.png"/>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <h5>Nathan Lu</h5>
                                                            <p>Can you send me a link?</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="in">
                                                    <div class="chat-img">
                                                        <img alt="Avtar"
                                                             src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <h5 class="name">Oliver Wilcox</h5>
                                                            <p>https://sb-hacks-viii.devpost.com/</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="out">
                                                    <div class="chat-img">
                                                        <img alt="Avtar"
                                                             src="https://bootdey.com/img/Content/avatar/avatar7.png"/>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <h5>Nathan Lu</h5>
                                                            <p>Are u going?</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="in">
                                                    <div class="chat-img">
                                                        <img alt="Avtar"
                                                             src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <h5 class="name">Oliver Wilcox</h5>
                                                            <p>Yep! Gonna be a grind 👀 but there's some sick prizes :) </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="out">
                                                    <div class="chat-img">
                                                        <img alt="Avtar"
                                                             src="https://bootdey.com/img/Content/avatar/avatar7.png"/>
                                                    </div>
                                                    <div class="chat-body">
                                                        <div class="chat-message">
                                                            <h5>Nathan Lu</h5>
                                                            <p>That's awesome! Can't wait :D</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <input class = "w-100" type="text"/>
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


