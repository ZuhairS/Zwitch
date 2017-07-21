import values from 'lodash/values';

export const selectAllChannels = channels => values(channels.allChannels)
;

export const selectFeaturedChannels = channels => values(channels.featuredChannels)
;
