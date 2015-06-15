class Playlist < ActiveRecord::Base
  validates :user, :name, presence: true
  belongs_to :user
  has_many :playlist_items
  has_many :songs, through: :playlist_items
end
