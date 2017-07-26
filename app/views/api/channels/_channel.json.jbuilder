json.extract! channel, :id,
                       :channel_name,
                       :video_url,
                       :stream_name,
                       :stream_description,
                       :profile_image_url,
                       :banner_image_url
json.owner_name channel.owner.username
