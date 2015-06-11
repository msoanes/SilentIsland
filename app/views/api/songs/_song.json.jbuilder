json.extract! song, :id, :title, :url, :description
json.tags song.tags, :id, :label
json.uploader song.uploader.username
