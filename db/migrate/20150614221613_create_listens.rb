class CreateListens < ActiveRecord::Migration
  def change
    create_table :listens do |t|
      t.integer :user_id, null: false
      t.integer :song_id, null: false
      t.timestamps null: false
    end

    add_index :listens, [:song_id, :user_id]
  end
end
