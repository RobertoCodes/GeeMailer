class Api::ConversationsController < ApplicationController

  def new
  end

  def index
    @conversations = Conversation.find_by_category(current_user, params[:category]).page(params[:page].to_i - 1).per(25)
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
    if params[:change] == "trashed"
      @conversation = Conversation.find(params[:id])
      @conversation.emails.update_all(trashed: true)
    elsif params[:change] == "read"
      @conversation = Conversation.find(params[:id])
      @conversation.read = true
      @conversation.save!
    end
    render :template => "api/conversations/show_no_child"
  end

  def edit
  end

end
