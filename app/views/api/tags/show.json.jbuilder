json.extract! @tag, :id, :label, :created_at, :updated_at

json.songs do
  json.partial! 'api/songs/songs', songs: @tag.songs.page(params[:page]), page_num: (params[:page] || 1).to_i
end

json.subscription do
  subscription = current_user.subscribeds.find_by(subscribable: @tag)
  if subscription
    json.extract! subscription, :id
  end
end
