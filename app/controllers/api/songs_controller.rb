module Api
  class SongsController < ApiController
    def create
      @song = current_user.songs.new(song_params)
      if song.update(song_params)
        render json: @song
      else
        render json: @song.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @song = Song.find(params[:id])
      if @song.update(song_params)
        render json: @song
      else
        render json: @song.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @song = Song.find(params[:id])
      render json: @song # add jbuilder for this one
    end

    def index
      render json: Song.all
    end

    def destroy
      @song = Song.find(params[:id])
      @song.destroy
      render json: {}
    end
  end
end
