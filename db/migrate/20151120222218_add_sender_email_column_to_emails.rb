class AddSenderEmailColumnToEmails < ActiveRecord::Migration
  def change
    add_column :emails, :sender_email, :string
  end
end
