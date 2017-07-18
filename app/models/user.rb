class User < ApplicationRecord

  attr_reader :password

  validates :username,
            :password_digest,
            :session_token,
            :profile_image_url,
            presence: true

  validates :username,
            uniqueness: true

  validates :password,
            length: { minimum: 6 },
            allow_nil: :true

  after_initialize :ensure_session_token, :ensure_default_profile_image
  before_validation :ensure_session_token_uniqueness

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return user if user && user.is_password(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    ensure_session_token_uniqueness
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def ensure_default_profile_image
    self.profile_image_url ||= "./assets/images/default_profile_img.png"
  end

  def ensure_session_token_uniqueness
    user = User.find_by_session_token(self.session_token)
    while user
      self.session_token = SecureRandom.urlsafe_base64
    end
  end

end
