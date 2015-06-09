class StaticPagesController < ApplicationController
  before_action :login_required

  def root
  end
end
