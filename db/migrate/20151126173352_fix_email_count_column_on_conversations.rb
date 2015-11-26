class FixEmailCountColumnOnConversations < ActiveRecord::Migration
  def change
    add_column :conversations, :num_emails, :integer, default: 1;
  end
end
