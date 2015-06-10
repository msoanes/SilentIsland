class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :song_id, null: false
      t.integer :tag_id, null: false

      t.timestamps null: false
    end

    add_index :taggings, [:song_id, :tag_id], unique: true
  end
end
