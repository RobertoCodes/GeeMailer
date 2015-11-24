class Api::EmailsController < ApplicationController

  def new
  end

  def create
    @email = Email.new(email_params) #subject, recipient_email, body,
    @email.sender_id = current_user.id
    @email.email_type = "sent"
    @email.category_id = 1
    if @email.save
      render :show
    else
      render json: @email.errors.full_messages
    end
  end

  def index
    @emails = Email.find_desired_emails(current_user.id, current_user.username, params[:category])
    render :index
  end

  def show
    @email = Email.find(params[:id])
    @children = @email.children
    render :show
  end

  def destroy
    @email = Email.find(params[:id])
    if params[:delete] == "conversation"
      @emails = @email.find_relatives
      debugger;
      @emails.each do |email|
        email.destroy
      end
      render :index
    else
      Email.destroy
      render :show
    end
  end

  def update
    @email = Email.find(params[:id])
    @email.toggle! params[:column].to_sym
    render :show
  end

  def edit
  end

  private

  def email_params
    params.require(:email).permit(:id, :subject, :body, :recipient_email, :sender_id,
      :parent_email_id, :email_type, :category_id, :starred, :trashed, :sender_email, :read)
  end





end
