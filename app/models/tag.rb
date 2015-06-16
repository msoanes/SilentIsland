class Tag < ActiveRecord::Base
  validates :label, presence: true, uniqueness: true, length: { maximum: 20 }

  has_many :taggings
  has_many :songs, through: :taggings

  after_initialize :filter_label!

  def self.filter_label(string)
    string.downcase.gsub(/[^a-z0-9& ]+/, '')
  end

  def filter_label!
    self.label = Tag.filter_label(label)
  end
end
