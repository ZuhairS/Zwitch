import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Chat extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestChatroom();
  }

  render() {
    const chatMessages = this.props.chatMessages;
    const currentUser = this.props.currentUser;

    if (chatMessages) {
      return (
        <section className='chatroom-container'>
          <header id='chat-title'>
            <h2>{this.props.channel.channel_name}</h2>
          </header>

          <section className='chat-windows'>
            <div id='chat-display'>

            </div>

            <div id='chat-input'>
              <textarea placeholder='Send a message...' />

              <div id='send-div'>
                <button>Chat</button>
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
