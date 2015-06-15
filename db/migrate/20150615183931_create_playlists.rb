class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.string :name, null: false
      t.text :description

      t.timestamps null: false
    end

    create_table :playlist_items do |t|
      t.integer :song_id, null: false, foreign_key: true
      t.integer :playlist_id, null: false, foreign_key: true

      t.timestamps null: false
    end

    add_index :playlists, :user_id
    add_index :playlist_items, [:song_id, :playlist_id], unique: true
  end
end
