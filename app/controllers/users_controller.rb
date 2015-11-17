class UsersController < ApplicationController

  before_action :check_signed_in

  def new

  end


  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      redirect_to staticpages_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end



  private

  def user_params
    params.require(:user).permit(:username, :password)
  end


end
