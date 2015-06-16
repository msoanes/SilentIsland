module Api
  class SearchesController < ApiController
    def index
      @songs = Song.where("title ILIKE ?", "%#{params[:q]}%").limit(3)
      @tags = Tag.where("label ILIKE ?", "%#{params[:q]}%").limit(3)
      @users = User.where("username ILIKE ?", "%#{params[:q]}%").limit(3)
    end
  end
end
