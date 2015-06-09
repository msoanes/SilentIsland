class SongsController < ApplicationController
  def new
    @song = Song.new
  end

  def create
    @song = current_user.songs.new(song_params)
    if @song.save
      redirect_to song_url(@song)
    else
      flash.now[:errors] = @song.errors.full_messages
      render :new
    end
  end

  def show
    @song = Song.find(params[:id])
  end

  private
    def song_params
      params.require(:song).permit(:title, :url, :description)
    end
end