class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :logged_in?, :current_user

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def current_user
    @current_user || User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login_required
    redirect_to new_user_url unless logged_in?
  end

  def login_forbidden
    redirect_to root_url if logged_in?
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end
end
