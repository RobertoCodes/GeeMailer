class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false, uniqueness: true
      t.string :password_digest
      t.string :session_token, null: false, uniqueness: true
    end
    add_index :users, :username
    add_index :users, :session_token
  end
end
