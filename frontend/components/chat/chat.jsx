import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ChatItem from './chat_item';

export default class Chat extends React.Component {

  constructor(props) {
    super(props);

    this.channelId = this.props.match.params.channelId;

    if (this.props.currentUser) {
      this.state = {
        chatroom_id: this.channelId,
        body: "",
        user_id: this.props.currentUser.id
      };
    }

    this.handleChat = this.handleChat.bind(this);
    this.updateChat = this.updateChat.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentDidMount() {
    this.props.requestChatroom(this.channelId).then(() => {
      this.display.scrollTop = this.display.scrollHeight;

      this.subscription = App.cable.subscriptions.create('MessagesChannel', {
        received: data => {
          this.props.receiveChatMessage(data);
          this.display.scrollTop = this.display.scrollHeight;
        }
      });
    });

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      this.props.requestChatroom(nextProps.match.params.channelId);
      this.channelId = nextProps.match.params.channelId;
    }
  }

  componentWillUnmount() {
    App.cable.subscriptions.remove(this.subscription);
  }

  handleChat(event) {
    event.preventDefault();
    let chatWindow = document.getElementById('chat-display');
    if (this.state.body !== "") {
      this.props.createChatMessage(this.state).then(
        this.setState({body: ""})).then(() => {this.display.scrollTop = this.display.scrollHeight;});
    }
  }

  updateChat(event) {
    this.setState({
      body: event.currentTarget.value
    });
  }

  handleEnter(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleChat(event);
    }
  }

  render() {
    const chatMessages = this.props.chatMessages;
    const currentUser = this.props.currentUser;
    let chatSubmit = currentUser ? this.handleChat : "";

    let textArea;

    if (currentUser) {
        textArea = <textarea
          id='chat-input-area'
          value={this.state.body}
          onChange={this.updateChat}
          onKeyPress={this.handleEnter}
          placeholder='Send a message...'
          />;
      } else {
        textArea = <textarea
          id='chat-input-area'
          placeholder='Please sign in to chat'
          disabled
          />;
      }

    if (chatMessages) {
      return (
        <section className='chatroom-container'>
          <header id='chat-title'>
            <h2>{this.props.channel.channel_name} Chatroom</h2>
          </header>

          <section className='chat-windows'>
            <div id='chat-display' ref={el => {this.display = el;} }>
              <ul>
                {chatMessages.map(chatMessage => (
                  <ChatItem key={chatMessage.id}
                    currentUser={currentUser}
                    chatMessage={chatMessage} />
                ))}
              </ul>
            </div>

            <div id='chat-input'>
              {textArea}

              <div id='send-div'>
                <button onClick={ chatSubmit }>Chat</button>
              </div>
            </div>
          </section>
        </section>
      );
    } else {
      return <div></div>;
    }
  }
}
