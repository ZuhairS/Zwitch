import { RECEIVE_ALL_CHANNELS, RECEIVE_SINGLE_CHANNEL, RECEIVE_FEATURED_CHANNELS, RECEIVE_FEATURED_CHANNEL } from '../actions/channel_actions';
import merge from 'lodash/merge';

const defaultState = () => ({
  allChannels: {},
  featuredChannels: {},
  featuredChannel: {},
  selectedChannel: {}
});


const ChannelReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_CHANNELS:
      return merge({}, state, { allChannels: action.channels });
    case RECEIVE_SINGLE_CHANNEL:
      return merge({}, state, { selectedChannel: action.channel });
    case RECEIVE_FEATURED_CHANNELS:
      return merge({}, state, { allChannels: action.channels });
    case RECEIVE_FEATURED_CHANNEL:
      return merge({}, state, { selectedChannel: action.channel });
    default:
      return state;
  }
};

export default ChannelReducer;
