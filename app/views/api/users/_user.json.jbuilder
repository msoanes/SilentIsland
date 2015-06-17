json.extract! user, :id, :username, :bio, :created_at, :updated_at

json.song_count user.songs.count
