class Song < ActiveRecord::Base
  validates :uploader, :title, :url, presence: true

  belongs_to :uploader, class_name: 'User'
  has_many :taggings
  has_many :tags, through: :taggings

  has_many :listens, counter_cache: true
  has_many :listeners, through: :listens, source: :user

  after_save :save_tags

  default_scope { order('created_at DESC') }

  def tag_labels=(labels)
    @tag_labels = labels
  end

  def save_tags
    return unless @tag_labels
    new_tags = Tag.where('label IN (?)', @tag_labels)
    @tag_labels -= new_tags.map { |tag| tag.label }
    @tag_labels.each { |label| new_tags << Tag.create(label: label) }
    self.tags = new_tags
  end
end
