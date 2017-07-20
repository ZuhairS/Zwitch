class Channel < ApplicationRecord

  validates :channel_name,
            :owner_id,
            :stream_name,
            :banner_image_url,
            presence: true

  validates :channel_name,
            :owner_id,
            uniqueness: true

  before_validation :ensure_default_channel_name,
                    :ensure_stream_name,
                    :ensure_default_profile_image

  belongs_to :owner,
    class_name: "User",
    primary_key: :id,
    foreign_key: :owner_id

  private

  def ensure_default_channel_name
    self.channel_name ||= "#{self.owner.username}'s Channel"
  end

  def ensure_stream_name
    self.stream_name ||= "#{self.owner.username}'s Stream"
  end

  def ensure_default_profile_image
    self.banner_image_url ||= "http://res.cloudinary.com/zwitch/image/upload/v1500511693/zwitch_default_banner_img_vtrk3t.jpg"
  end

end
