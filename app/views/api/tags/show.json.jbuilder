json.extract! @tag, :id, :label, :created_at, :updated_at

json.songs @tag.songs, partial: 'api/songs/song', as: :song

json.subscription do
  json.extract! current_user.subscribeds.find_by(subscribable: @tag), :id
end
