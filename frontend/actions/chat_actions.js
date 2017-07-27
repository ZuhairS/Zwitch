import * as APIUtil from '../util/chat_api_util';

export const RECEIVE_CHATROOM = "RECEIVE_CHATROOM";
export const RECEIVE_CHAT_MESSAGE = "RECEIVE_CHAT_MESSAGE";

export const receiveChatroom = chatroom => ({
  type: RECEIVE_CHATROOM,
  chatroom
});

export const receiveChatMessage = chatMessage => ({
  type: RECEIVE_CHAT_MESSAGE,
  chatMessage
});

export const requestChatroom = () => dispatch => (
  APIUtil.fetchChatroom().then(chatroom => dispatch(receiveChatroom(chatroom)))
);

export const createChatMessage = chatMessage => dispatch => (
  APIUtil.createChatMessage(chatMessage).then(createdChatMessage => dispatch(receiveChatMessage(createdChatMessage)))
);
