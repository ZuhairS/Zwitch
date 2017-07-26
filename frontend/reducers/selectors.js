import values from 'lodash/values';

export const selectAllChannels = channels => values(channels.allChannels);

export const selectFeaturedChannels = channels => values(channels.featuredChannels);

export const selectFollows = follows => values(follows.all_follows);

export const selectFollowIds = follows => values(follows.followed_channel_ids);
