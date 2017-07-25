class User < ApplicationRecord

  attr_reader :password

  validates :username,
            :password_digest,
            :session_token,
            :profile_image_url,
            presence: true

  validates :username,
            uniqueness: true,
            length: { maximum: 16 }

  validates :password,
            length: { minimum: 6 },
            allow_nil: :true

  after_initialize :ensure_session_token,
                   :ensure_default_profile_image

  before_validation :ensure_session_token_uniqueness

  after_create :ensure_channel

  has_one :channel,
    class_name: "Channel",
    primary_key: :id,
    foreign_key: :owner_id,
    dependent: :destroy

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return user if user && user.is_password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    ensure_session_token_uniqueness
    self.save!
    self.session_token
  end

  private

  def ensure_channel
    self.channel ||= Channel.create!(owner_id: self.id)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def ensure_default_profile_image
    self.profile_image_url ||= "http://res.cloudinary.com/zwitch/image/upload/q_100/v1500693494/Profiles/Zwitch_Profile_Image_pxu1oi.png"
  end

  def ensure_session_token_uniqueness
    user = User.find_by_session_token(self.session_token)
    while user
      self.session_token = SecureRandom.urlsafe_base64
    end
  end

end
