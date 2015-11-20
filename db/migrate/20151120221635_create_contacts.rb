class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.integer :owner_id, null: false
      t.string :name, null: false
    end
    add_index :contacts, :owner_id
  end
end
