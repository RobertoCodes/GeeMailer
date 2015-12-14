class Api::ConversationsController < ApplicationController

  def new
  end

  def index
    @conversations = Conversation.find_by_category(current_user, params[:category]).page(params[:page].to_i).per(3)
    render :index
  end

  def show
    @conversation = Conversation.find(params[:id])
    render :show
  end

  # def destroy
  #   @conversation = Conversation.find(params[:id])
  #   @conversation.emails.each do |email|
  #     email.trashed = "true"
  #     email.save!
  #   end
  #   render :show
  # end

  def update
    @conversation = Conversation.find(params[:id])
    if params[:change] == "trashed"
      @conversation.emails.update_all(trashed: true)
    elsif params[:change] == "read"
      @conversation.read = true
      @conversation.save!
    elsif params[:change] == "restore"
      @conversation.emails.update_all(trashed: false)
    end
    render :template => "api/conversations/show_no_child"
  end

  def edit
  end

end
