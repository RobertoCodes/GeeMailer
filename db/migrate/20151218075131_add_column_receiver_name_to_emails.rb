class AddColumnReceiverNameToEmails < ActiveRecord::Migration
  def change
    add_column :emails, :recipient_name, :string
  end
end
