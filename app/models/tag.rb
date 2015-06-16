class Tag < ActiveRecord::Base
  validates :label, presence: true, uniqueness: true, length: { maximum: 20 }

  has_many :taggings
  has_many :songs, through: :taggings
end
