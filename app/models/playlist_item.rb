class PlaylistItem < ActiveRecord::Base
  validates :song, :playlist, presence: true
  belongs_to :song
  belongs_to :playlist
end
