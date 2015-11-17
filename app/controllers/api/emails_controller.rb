class Api::EmailsController < ApplicationController

  def new
  end

  def create
    @email = Email.new(email_params)
    if @email.save
      render :index
    else
      flash.now[:errors] = @email.errors.full_messages
      render :create
    end
  end

  def index
    @emails = Email.all
    render :index
  end

  def show
    @email = Email.find(params[:id])
    @children = @email.children
    render :show
  end

  def destroy
  end

  def update
  end

  def edit
  end

  private

  def email_params
    params.require(:email).permit(:id, :subject, :body, :sender_id,
      :parent_email_id, :type, :category_id, :starred, :trashed)
  end





end
