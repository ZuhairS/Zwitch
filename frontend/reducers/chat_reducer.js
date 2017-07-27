import { RECEIVE_CHATROOM, RECEIVE_CHAT_MESSAGE } from '../actions/chat_actions';
import merge from 'lodash/merge';

const ChatReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CHATROOM:
      return merge({}, action.chatroom);
    case RECEIVE_CHAT_MESSAGE:
      return merge({}, state, {[action.chatMessage.id]: action.chatMessage});
    default:
      return state;
  }
};

export default ChatReducer;
