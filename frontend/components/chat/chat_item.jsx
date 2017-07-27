import React from 'react';
import { Link } from 'react-router-dom';

const ChatItem = ({ chatMessage }) => (
  <li className="chat-item">
    {chatMessage.username}: {chatMessage.body}
  </li>
);

export default ChatItem;
