export const fetchChatroom = channelId => (
  $.ajax({
    type: 'GET',
    url: `api/chatroom/${channelId}`
  })
);

export const createChatMessage = message => (
  $.ajax({
    type: 'POST',
    url: `api/chatroom/${message.chatroomId}`,
    data: { message }
  })
);
