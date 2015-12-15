class Api::EmailsController < ApplicationController

  def new
  end

  def create
    @email = Email.new(email_params)
    @email.sender_email = current_user.username
    @email.email_type = "sent"
    if @email.parent_email_id
      @parent_email = Email.find(@email.parent_email_id)
        @email.conversation_id = @parent_email.conversation.id
        @email.save!
        @conversation = @email.conversation
        @conversation.read = false
        @conversation.save!
    else
        @conversation = Conversation.create!(user_id: current_user.id)
        @email.conversation_id = @conversation.id
        @email.save!
    end
    delivered_email = EmailMailer.send_email(@email).deliver_now
    @email.message_id = delivered_email.message_id
    debugger
    @email.save!

    render :template => "api/conversations/show"
  end

  def index
    @emails = Email.find_desired_emails(current_user.id, current_user.username,
      params[:category]).order(created_at: :desc)
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
    @conversation = @email.conversation
    render :template => "api/conversations/show"
  end

  def edit
  end

  private

  def email_params
    params.require(:email).permit(:id, :subject, :body, :recipient_email, :sender_id,
      :parent_email_id, :email_type, :category_id, :starred, :trashed, :sender_email, :read)
  end

end
