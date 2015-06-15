json.extract! listen, :id, :created_at

json.song do
  json.partial! 'api/songs/song', song: listen.song
end
