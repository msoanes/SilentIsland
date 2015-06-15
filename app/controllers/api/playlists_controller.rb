module Api
  class PlaylistsController < ApplicationController
    def show
      @playlist = Playlist.includes(songs: [:uploader, :tags]).find(params[:id])
      if !@playlist
        render json: ['404 playlist not found'], status: :not_found
      end
    end

    def index
      @playlists = Playlist.page(params[:page])

      render json: {
        models: @playlists,
        page: (params[:page] || '1').to_i,
        total_pages: @playlists.total_pages
      }
    end
  end
end
