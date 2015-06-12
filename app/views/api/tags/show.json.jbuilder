json.extract! @tag, :id, :label, :created_at, :updated_at

json.songs @tag.songs, partial: 'api/songs/song', as: :song

json.subscription do
  subscription = current_user.subscribeds.find_by(subscribable: @tag)
  if subscription
    json.extract! subscription, :id
  end
end
