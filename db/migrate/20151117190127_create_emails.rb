class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string :subject, null: false
      t.text :body, null: false
      t.integer :sender_id, null: false
      t.integer :parent_email_id
      t.string :type, null: false
      t.integer :category_id, null: false
      t.boolean :starred, default: false
      t.boolean :trashed, default: false
    end
    add_index :emails, :sender_id
    add_index :emails, :parent_email_id
    add_index :emails, :category_id
  end
end
