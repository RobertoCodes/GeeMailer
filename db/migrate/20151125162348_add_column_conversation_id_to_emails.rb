class AddColumnConversationIdToEmails < ActiveRecord::Migration
  def change
    add_column :emails, :conversation_id, :integer
  end
end
