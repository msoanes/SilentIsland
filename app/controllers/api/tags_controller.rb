module Api
  class TagsController < ApplicationController
    def show
      @tag = Tag.includes(songs: [:uploader, :tags]).find(params[:id])
      if !@tag
        render json: ['404 tag not found'], status: :not_found
      end
    end

    def index
      @tags = Tag.where("label LIKE ?", "%#{params[:q]}%")
      render json: @tags
    end
  end
end
