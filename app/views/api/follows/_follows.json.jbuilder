follows.each do |follow|
  json.set! follow.id do
    json.id follow.id
    json.follower_username follow.follower.username
    json.followed_channel follow.followed_channel, :channel_name, :stream_name, :profile_image_url
  end
end
