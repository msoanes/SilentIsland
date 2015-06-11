module Api
  class UsersController < ApplicationController
    def show
      @user = User.includes(songs: [:uploader, :tags]).find(params[:id])
      if !@user
        render json: ['404 user not found'], status: :not_found
      end
    end

    def index
      @users = User.all
    end
  end
end
