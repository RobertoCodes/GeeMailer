class UsersController < ApplicationController

  def new
    
  end


  def create
    @user = User.new(user_params)
    if @user
      sign_in(user)
    else
      flash.now[:errors] = User.errors.full_messages
    end
  end



  private

  def user_params
    params.require(:user).permit(:username, :password)
  end


end
