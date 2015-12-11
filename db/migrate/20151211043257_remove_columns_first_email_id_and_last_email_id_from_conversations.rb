class RemoveColumnsFirstEmailIdAndLastEmailIdFromConversations < ActiveRecord::Migration
  def change
    remove_column :conversations,  :first_email_id, :integer
    remove_column :conversations,  :last_email_id, :integer
  end
end
