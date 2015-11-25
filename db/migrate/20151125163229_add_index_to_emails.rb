class AddIndexToEmails < ActiveRecord::Migration
  def change
    add_index :emails, :conversation_id
  end
end
