class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.integer :uploader_id, null: false
      t.string :title, null: false
      t.string :url, null: false
      t.string :description

      t.timestamps null: false
    end

    add_index :songs, :uploader_id
  end
end
