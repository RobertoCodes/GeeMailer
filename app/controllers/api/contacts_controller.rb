class Api::ContactsController < ApplicationController

  def new
  end

  def create
    @contact = Contact.new(contact_params)
    @contact.owner_id = current_user.id
    if @contact.save
      render :show
    else
      render json: @contact.errors.full_messages
    end
  end

  def index
    @contacts = current_user.contacts
    render :index
  end

  def show
    @contact = Contact.find(params[:id])
    render :show
  end

  def destroy
  end

  def update
  end

  def edit
  end

  private

  def contact_params
    params.require(:contact).permit(:id, :name, :owner_id, :contact_email_address)
  end


end
