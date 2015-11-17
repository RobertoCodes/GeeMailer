class UsersController < ApplicationController

  def new

  end


  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render json: "you are in!"
    else
      flash.now[:errors] = @user.errors.full_messages
      render json: "you not in"
    end
  end



  private

  def user_params
    params.require(:user).permit(:username, :password)
  end


end
