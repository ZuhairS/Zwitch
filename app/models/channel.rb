class Channel < ApplicationRecord

  validates :channel_name,
            :owner_id,
            :stream_name,
            :banner_image_url,
            presence: true

  validates :channel_name,
            :owner_id,
            :stream_name,
            :banner_image_url,
            uniqueness: true

  private

  def ensure_default_profile_image
    self.banner_image_url ||= "http://res.cloudinary.com/zwitch/image/upload/v1500511693/zwitch_default_banner_img_vtrk3t.jpg"
  end

end
