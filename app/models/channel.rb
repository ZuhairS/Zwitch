class Channel < ApplicationRecord

  validates :channel_name,
            :owner,
            :stream_name,
            :banner_image_url,
            :profile_image_url,
            presence: true

  validates :channel_name,
            uniqueness: true,
            length: { maximum: 20 }

  validates :stream_name,
            length: { maximum: 48 }

  validates :stream_description,
            length: { maximum: 200 }

  before_validation :ensure_default_channel_name,
                    :ensure_stream_name,
                    :ensure_default_banner_image,
                    :ensure_default_profile_image

  after_create :ensure_chatroom

  belongs_to :owner,
    class_name: "User",
    primary_key: :id,
    foreign_key: :owner_id

  has_one :chatroom, dependent: :destroy

  has_many :follows,
    class_name: "Follow",
    primary_key: :id,
    foreign_key: :followed_channel_id,
    dependent: :destroy

  has_many :followers,
    source: :follower,
    through: :follows

  def self.all_channels
    Channel.where.not(video_url: "")
  end

  def self.featured_channels
    Channel.where.not(video_url: "").limit(6)
  end

  def self.featured_channel
    # Selects random num fron playing channel count and then selects first result.
    playing_channels = Channel.where.not(video_url: "")
    playing_channels.offset(rand(playing_channels.count)).first
  end

  def follows
    self.followers.count
  end

  def followings
    self.owner.followed_channels.count
  end

  private

  def ensure_default_channel_name
    self.channel_name ||= self.owner.username
  end

  def ensure_stream_name
    self.stream_name = self.stream_name == "" ? "#{self.channel_name}'s Stream" : self.stream_name
  end

  def ensure_default_profile_image
    self.profile_image_url = self.profile_image_url == "" ? "http://res.cloudinary.com/zwitch/image/upload/q_100/v1500693494/Profiles/Zwitch_Profile_Image_pxu1oi.png" : self.profile_image_url
  end

  def ensure_default_banner_image
    self.banner_image_url = self.banner_image_url == "" ?  "http://res.cloudinary.com/zwitch/image/upload/q_100/v1500698080/Banners/zwitch_default_banner_img2_rghxd7.png" : self.banner_image_url
  end

  def ensure_chatroom
    self.chatroom ||= Chatroom.create!(channel_id: self.id)
  end

end
