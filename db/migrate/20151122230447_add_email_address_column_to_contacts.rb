class AddEmailAddressColumnToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :contact_email_address, :string
  end
end
