class AddColumnToEmails < ActiveRecord::Migration
  def change
    add_column :emails, :read, :boolean
  end
end
