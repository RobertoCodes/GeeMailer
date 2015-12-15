class AddTimestamptsToConversations < ActiveRecord::Migration
  def change
    add_column :conversations, :created_at, :datetime
    add_column :conversations, :updated_at, :datetime
  end
end
