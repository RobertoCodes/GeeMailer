class CreateConversations < ActiveRecord::Migration
  def change
    create_table :conversations do |t|
      t.integer :first_email_id
      t.integer :last_email_id
    end
  end
end
