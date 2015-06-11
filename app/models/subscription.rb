class Subscription < ActiveRecord::Base
  validates :follower_id, :subscribable_id, :subscribable_type, presence: true
  validates(
    :follower_id,
    uniqueness: {
      scope: [:subscribable_id, :subscribable_type]
    }
  )

  belongs_to :follower, class_name: 'User'
  belongs_to :subscribable, polymorphic: true
end
