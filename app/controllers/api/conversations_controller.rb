class Api::ConversationsController < ApplicationController

  def new
  end

  def index
    @conversations = Conversation.find_by_category(current_user, params[:category])
    render :index
  end

  def show
    @conversation = Conversation.find(params[:id])
    render :show
  end

  def destroy
    @conversation = Conversation.find(params[:id])
    @conversation.destroy
    render :destroy_show
  end

  def update
  end

  def edit
  end

  # private
  #
  # def contact_params
  #   params.require(:converation).permit(:id, :name, :owner_id, :contact_email_address)
  # end


end
