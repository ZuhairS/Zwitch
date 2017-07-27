export const fetchChatroom = channelId => (
  $.ajax({
    type: 'GET',
    url: `api/chatrooms/${channelId}`
  })
);

export const createChatMessage = chat_message => (
  $.ajax({
    type: 'POST',
    url: `api/chatrooms/${chat_message.chatroom_id}/chat_messages`,
    data: { chat_message }
  })
);
