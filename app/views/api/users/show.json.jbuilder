json.partial! 'user', user: @user

json.songs do
  json.partial! 'api/songs/songs', songs: @user.songs.page(params[:page]), page_num: (params[:page] || 1).to_i
end

json.subscription do
  subscription = current_user.subscribeds.find_by(subscribable: @user)
  if subscription
    json.extract! subscription, :id
  end
end
