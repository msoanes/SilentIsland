class Song < ActiveRecord::Base
  validates :uploader, :title, :url, presence: true

  belongs_to :uploader, class_name: 'User'
end
