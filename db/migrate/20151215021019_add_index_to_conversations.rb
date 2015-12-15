class AddIndexToConversations < ActiveRecord::Migration
  def change
    add_index :conversations, :user_id
  end
end
