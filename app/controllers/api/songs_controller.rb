module Api
  class SongsController < ApiController
    def create
      @song = current_user.songs.new(song_params)
      if @song.save
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
      @song = Song.includes(:tags, :uploader).find(params[:id])
    end

    def index
      @songs = Song.includes(:tags, :uploader)
    end

    def destroy
      @song = Song.find(params[:id])
      @song.destroy
      render json: {}
    end

    def stream
      @songs = current_user.stream
      render :index
    end

    private
      def song_params
        params.require(:song).permit(:title, :url, :description, tag_labels: [])
      end
  end
end
