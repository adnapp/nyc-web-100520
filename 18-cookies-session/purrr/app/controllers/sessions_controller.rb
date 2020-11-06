class SessionsController < ApplicationController
  def page_reset
    # session[:page_count] = nil 
    session.delete(:page_count)

    redirect_back fallback_location: cats_path
  end
end
