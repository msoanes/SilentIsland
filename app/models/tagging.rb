class Tagging < ActiveRecord::Base
  validates :tag, uniqueness: { scope: :song }

  belongs_to :song
  belongs_to :tag
end
