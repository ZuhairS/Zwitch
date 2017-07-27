json.id chat_message.id
json.channel_id chat_message.chatroom.channel.id
json.username chat_message.user.username
json.extract! chat_message, :body
