class Tag < ActiveRecord::Base
  validates :label, presence: true
  validates :label, uniqueness: true

  has_many :taggings
  has_many :songs, through: :taggings
end
