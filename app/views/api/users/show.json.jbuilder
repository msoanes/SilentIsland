json.partial! 'user', user: @user

json.songs @user.songs, partial: 'api/songs/song', as: :song
