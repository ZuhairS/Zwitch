import { RECEIVE_ALL_CHANNELS, RECEIVE_SINGLE_CHANNEL, RECEIVE_FEATURED_CHANNELS, RECEIVE_FEATURED_CHANNEL, EDIT_CHANNEL, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/channel_actions';
import merge from 'lodash/merge';

const defaultState = () => ({
  allChannels: {},
  featuredChannels: {},
  featuredChannel: {},
  selectedChannel: {},
  errors: []
});


const ChannelReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_CHANNELS:
      return merge({}, state, { allChannels: action.channels });
    case RECEIVE_SINGLE_CHANNEL:
      return merge({}, state, { selectedChannel: action.channel });
    case RECEIVE_FEATURED_CHANNELS:
      return merge({}, state, { featuredChannels: action.channels });
    case RECEIVE_FEATURED_CHANNEL:
      return merge({}, state, { featuredChannel: action.channel });
    case EDIT_CHANNEL:
      return merge({}, state, { selectedChannel: action.channel });
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    case CLEAR_ERRORS:
      return Object.assign({}, state, { errors: [] } );
    default:
      return state;
  }
};

export default ChannelReducer;
