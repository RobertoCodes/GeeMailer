class SessionsController < ApplicationController

  def new
  end


  def create
    @user = User.find_by_credentials(session[:username], session[:password])
    if @user
      sign_in(user)
      render json: "you're in!"
    else
      flash.now[:errors] = User.errors.full_messages
      render :new
    end
  end

end
