class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :songs, foreign_key: :uploader_id, counter_cache: true

  has_many :subscribeds, class_name: 'Subscription', foreign_key: :follower_id

  has_many :listens
  has_many :listened_songs, through: :listens, source: :song

  has_many :playlists

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
    song_id_query = <<-SQL
SELECT
  songs.id
FROM
  songs
JOIN
  taggings
ON
  taggings.song_id = songs.id
JOIN
  tags
ON
  taggings.tag_id = tags.id
JOIN
  subscriptions
ON
  subscriptions.subscribable_id = tags.id AND subscriptions.subscribable_type = 'Tag'
WHERE
  subscriptions.follower_id = #{id}
UNION
SELECT
  songs.id
FROM
  songs
JOIN
  subscriptions
ON
  subscriptions.subscribable_id = songs.uploader_id AND
    subscriptions.subscribable_type = 'User'
WHERE
  subscriptions.follower_id = #{id}
SQL
    song_ids = ActiveRecord::Base.connection.execute(song_id_query).map do |h|
      h['id'].to_i
    end

    Song.where('"songs"."id" IN (?)', song_ids)
  end
end
