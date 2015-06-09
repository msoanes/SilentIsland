class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :songs, foreign_key: :uploader_id

  after_initialize :ensure_session_token

  attr_accessor :password

  def self.find_by_credentials(credentials)
    user = self.find_by(username: credentials[:username])
    user if user && user.is_password?(credentials[:password])
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    save
    session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end
end
