module Api
  class SongsController < ApiController
    before_action :require_song_owner!, only: [:update, :destroy]

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
      @songs = Song.includes(:tags, :uploader).page(params[:page])
    end

    def destroy
      @song = Song.find(params[:id])
      @song.destroy
      render json: {}
    end

    def stream
      @songs = current_user.stream.page(params[:page]).includes(:uploader, :tags)
      render :index
    end

    private
      def require_song_owner!
        if Song.find(params[:id]).uploader != current_user
          render json: ['Cannot modify or remove other users songs'], status: :forbidden
        end
      end

      def song_params
        params.require(:song).permit(:title, :url, :description, tag_labels: [])
      end
  end
end
