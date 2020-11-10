class SessionsController < ApplicationController
  skip_before_action :authorization, only: [:new, :create]

  def page_reset
    # session[:page_count] = nil 
    session.delete(:page_count)

    redirect_back fallback_location: cats_path
  end

  def logout 
    session.delete(:user_id)

    redirect_to cats_path
  end 

  def new 
  end 

  def create 
    user = User.find_by(user_name: params[:session][:user_name])
     
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      redirect_to cats_path
    else
      flash[:error] = "Username or Password was incorrect"
      redirect_to new_login_path
    end 
  end

end
