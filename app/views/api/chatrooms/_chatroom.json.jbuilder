@chatroom.chat_messages.each do |chat_message|
  json.set! chat_message.id do
    json.channel_id chat_message.chatroom.channel.id
    json.username chat_message.user.username
    json.body chat_message.body
  end
end
