json.models @songs, partial: 'song', as: :song
json.page (params[:page] || '1').to_i
json.total_pages @songs.total_pages
