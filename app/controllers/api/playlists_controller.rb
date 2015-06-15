module Api
  class PlaylistsController < ApplicationController
    def create
      @playlist = Playlist.new(playlist_params)
      if @playlist.save
        render json: @playlist
      else
        render json: @playlist.errors.full_messages, status: :unprocessable_entity
      end
    end

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

    def destroy
      @playlist = Playlist.find(params[:id])
      @playlist.destroy
      render json: {}
    end
  end
end
