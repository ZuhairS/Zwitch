import * as APIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const receiveFollows = follows => ({
  type: RECEIVE_FOLLOWS,
  follows
});

export const removeFollow = followId => ({
  type: REMOVE_FOLLOW,
  followId
});

export const requestFollows = () => dispatch => (
  APIUtil.fetchAllFollows().then(follows => dispatch(receiveFollows(follows)))
);

export const createFollow = follow => dispatch => (
  APIUtil.createFollow(follow).then(createdFollow => dispatch(receiveFollows(createdFollow)))
);

export const deleteFollow = channelId => dispatch => (
  APIUtil.destroyFollow(channelId).then((follows) => dispatch(receiveFollows(follows)))
);
