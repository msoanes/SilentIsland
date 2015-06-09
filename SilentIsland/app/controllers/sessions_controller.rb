class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = User.find_by_credentials(user_params)
    if user
      login!(user)
      redirect_to root_url
    else
      @user = User.new(user_params)
      flash.now[:errors] = ['Invalid username/password combination.']
      render :new
    end
  end

  def destroy
    logout!
    redirect_to new_user_url
  end
end
