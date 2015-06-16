module Api
  class TagsController < ApplicationController
    def show
      @tag = Tag.includes(songs: [:uploader, :tags]).find(params[:id])
      if !@tag
        render json: ['404 tag not found'], status: :not_found
      end
    end

    def index
      @tags = Tag
        .page(params[:page])
        .per(params[:per])

      render json: {
        models: @tags,
        page: (params[:page] || '1').to_i,
        total_pages: @tags.total_pages
      }
    end
  end
end
