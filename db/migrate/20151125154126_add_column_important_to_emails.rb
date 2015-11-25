class AddColumnImportantToEmails < ActiveRecord::Migration
  def change
    add_column :emails, :important, :boolean, default: false
  end
end
