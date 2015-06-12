json.partial! 'user', user: @user

json.songs @user.songs, partial: 'api/songs/song', as: :song

json.subscription do
  subscription = current_user.subscribeds.find_by(subscribable: @user)
  if subscription
    json.extract! subscription, :id
  end
end
