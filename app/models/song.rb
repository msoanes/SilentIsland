class Song < ActiveRecord::Base
  validates :uploader, :title, :url, presence: true

  belongs_to :uploader, class_name: 'User'
  has_many :taggings
  has_many :tags, through: :taggings
end
