class Song < ActiveRecord::Base
  validates :uploader, :title, :url, presence: true

  belongs_to :uploader, class_name: 'User'
  has_many :taggings
  has_many :tags, through: :taggings

  after_save :save_tags

  def tag_labels=(labels)
    @tag_labels = labels
  end

  def save_tags
    return unless @tag_labels
    tags = Tag.where('label IN (?)', @tag_labels)
    @tag_labels -= tags.map { |tag| tag.label }
    @tag_labels.each { |label| tags << Tag.create(label: label) }
    self.tags = tags
  end
end
