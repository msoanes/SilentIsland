class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :songs, foreign_key: :uploader_id

  has_many :subscribeds, class_name: 'Subscription', foreign_key: :follower_id

  has_many :subscribed_users, through: :subscribeds, source: :subscribable, source_type: 'User'
  has_many :subscribed_user_songs, through: :subscribed_users, source: :songs

  has_many :subscribed_tags, through: :subscribeds, source: :subscribable, source_type: 'Tag'
  has_many :subscribed_tag_songs, through: :subscribed_tags, source: :songs

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

  def stream
    subscribed_user_songs | subscribed_tag_songs
  end
end
