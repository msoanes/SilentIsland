json.extract! @playlist, :id, :name, :created_at, :updated_at

json.songs do
  json.partial! 'api/songs/songs', songs: @playlist.songs.page(params[:page]), page_num: (params[:page] || 1).to_i
end

json.user do
  json.partial! 'api/users/user', user: @playlist.user
end
