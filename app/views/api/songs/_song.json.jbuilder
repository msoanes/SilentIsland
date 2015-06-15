json.extract! song, :id, :title, :url, :description, :created_at
json.tags song.tags, :id, :label
json.uploader do
  json.username song.uploader.username
  json.id song.uploader_id
end
