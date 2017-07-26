export const fetchAllFollows = () => (
  $.ajax({
    type: 'GET',
    url: 'api/follows'
  })
);

export const createFollow = follow => (
  $.ajax({
    type: 'POST',
    url: `api/follows`,
    data: { follow }
  })
);

export const destroyFollow = channelId => (
  $.ajax({
    type: 'DELETE',
    url: `api/follows/${channelId}`
  })
);
