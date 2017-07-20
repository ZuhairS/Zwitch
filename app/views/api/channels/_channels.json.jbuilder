json.array! channels do |channel|
  json.id channel.id
  json.channel_name channel.channel_name
  json.owner_id channel.owner_id
  json.video_url channel.video_url
  json.stream_name channel.stream_name
end
