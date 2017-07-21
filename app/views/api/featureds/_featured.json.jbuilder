json.extract! channel, :id,
                       :channel_name,
                       :owner_id,
                       :video_url,
                       :stream_name,
                       :stream_description
json.profile_image_url channel.owner.profile_image_url
