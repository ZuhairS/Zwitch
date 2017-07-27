import SessionReducer from './session_reducer';
import ChannelReducer from './channel_reducer';
import FollowReducer from './follow_reducer';
import ChatReducer from './chat_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelReducer,
  follows: FollowReducer,
  chatMessages: ChatReducer
});


export default RootReducer;
