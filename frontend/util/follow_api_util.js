export const fetchAllFollows = () => (
  $.ajax({
    type: 'GET',
    url: 'api/follows'
  })
);

export const createFollow = follow => (
  $.ajax({
    type: 'DELETE',
    url: `api/follows`,
    data: { follow }
  })
);

export const destroyFollow = followId => (
  $.ajax({
    type: 'DELETE',
    url: `api/follows/${followId}`
  })
);
