json.extract! channel, :id,
                       :channel_name,
                       :video_url,
                       :stream_name,
                       :stream_description,
                       :banner_image_url
json.owner_name channel.owner.username
json.profile_image_url channel.owner.profile_image_url
