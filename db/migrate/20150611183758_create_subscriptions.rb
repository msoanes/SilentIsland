class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.integer :follower_id, null: false
      t.integer :subscribable_id, null: false
      t.string :subscribable_type, null: false

      t.timestamps null: false
    end

    add_index(
      :subscriptions,
      [:subscribable_type, :subscribable_id, :follower_id],
      unique: true,
      name: 'subscriptions_uniqueness_index'
    )
  end
end
