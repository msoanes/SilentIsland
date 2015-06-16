module Api
  class SearchesController < ApiController
    def index
      @songs = Song.where("title LIKE ?", "%#{params[:q]}%").limit(5)
      @tags = Tag.where("label LIKE ?", "%#{params[:q]}%").limit(5)
      @users = User.where("username LIKE ?", "%#{params[:q]}%").limit(5)
    end
  end
end
