import * as APIUtil from '../util/channels_api_util';

export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_SINGLE_CHANNEL = "RECEIVE_SINGLE_CHANNEL";
export const RECEIVE_FEATURED_CHANNELS = "RECEIVE_FEATURED_CHANNELS";
export const RECEIVE_FEATURED_CHANNEL = "RECEIVE_FEATURED_CHANNEL";

export const receiveAllChannels = channels => ({
  type: RECEIVE_ALL_CHANNELS,
  channels
});

export const receiveSingleChannel = channel => ({
  type: RECEIVE_SINGLE_CHANNEL,
  channel
});

export const receiveFeaturedChannels = channels => ({
  type: RECEIVE_FEATURED_CHANNELS,
  channels
});

export const receiveFeaturedChannel = channel => ({
  type: RECEIVE_FEATURED_CHANNEL,
  channel
});

export const requestAllChannels = () => dispatch => (
  APIUtil.fetchAllChannels().then(channels => dispatch(receiveAllChannels(channels)))
);

export const requestSingleChannel = channelId => dispatch => (
  APIUtil.fetchSingleChannel(channelId).then(channel => dispatch(receiveSingleChannel(channel)))
);

export const requestFeaturedChannels = () => dispatch => (
  APIUtil.fetchFeaturedChannels().then(channels => dispatch(receiveFeaturedChannels(channels)))
);

export const requestFeaturedChannel = () => dispatch => (
  APIUtil.fetchFeaturedChannel().then(channel => dispatch(receiveFeaturedChannel(channel)))
);
