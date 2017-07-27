class Follow < ApplicationRecord
  validates :follower,
            :followed_channel,
            presence: true

  validates :followed_channel, uniqueness: { scope: :follower, message: "one follow per user" }

  belongs_to :follower,
    class_name: "User",
    primary_key: :id,
    foreign_key: :follower_id

  belongs_to :followed_channel,
    class_name: "Channel",
    primary_key: :id,
    foreign_key: :followed_channel_id

end
