class AddColumnHtmLbodyToEmails < ActiveRecord::Migration
  def change
    add_column :emails, :html_body, :string
  end
end
