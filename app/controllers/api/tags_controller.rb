module Api
  class TagsController < ApplicationController
    def show
      @tag = Tag.find(params[:id])
      if @tag
        render json: @tag
      else
        render json: ['404 tag not found'], status: :not_found
      end
    end

    def index
      @tags = Tag.all
      render json: @tags
    end
  end
end
