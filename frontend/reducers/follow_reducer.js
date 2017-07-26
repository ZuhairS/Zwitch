import { RECEIVE_FOLLOWS, REMOVE_FOLLOW } from '../actions/follow_actions';
import merge from 'lodash/merge';

const FollowReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_FOLLOWS:
      return merge({}, action.follows);
    default:
      return state;
  }
};

export default FollowReducer;
