class Listen < ActiveRecord::Base
  validates :song, :user, presence: true
  belongs_to :song
  belongs_to :user
end
