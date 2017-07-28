import React from 'react';
import { Link } from 'react-router-dom';

const ChatItem = ({ chatMessage, currentUser }) => {

  let color = "not-colored";

  if (currentUser) {
    color = chatMessage.username === currentUser.username ? "colored" : "not-colored";
  }

  return (
    <li className="chat-item">
      <strong className={color}>{chatMessage.username}</strong>: {chatMessage.body}
    </li>
  );
};

export default ChatItem;
