class RemoveColumnNumEmailsFromConversations < ActiveRecord::Migration
  def change
    remove_column :conversations, :num_emails, :integer
  end
end
