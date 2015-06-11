json.extract! @tag, :id, :label, :created_at, :updated_at

json.songs @tag.songs, partial: 'api/songs/song', as: :song
