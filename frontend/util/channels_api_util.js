export const fetchAllChannels = () => (
  $.ajax({
    type: 'GET',
    url: 'api/channels'
  })
);

export const fetchSingleChannel = channelId => (
  $.ajax({
    type: 'GET',
    url: `api/channels/${channelId}`
  })
);

export const fetchFeaturedChannels = () => (
  $.ajax({
    type: 'GET',
    url: 'api/featured_channels'
  })
);

export const fetchFeaturedChannel = () => (
  $.ajax({
    type: 'GET',
    url: 'api/featured'
  })
);

export const updateChannel = channel => (
  $.ajax({
    type: 'PATCH',
    url: `api/channels/${channel.id}`,
    data: {channel}
  })
);
