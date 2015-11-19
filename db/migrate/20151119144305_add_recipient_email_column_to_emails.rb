class AddRecipientEmailColumnToEmails < ActiveRecord::Migration
  def  change
    add_column :emails, :recipient_email, :string
  end
end
