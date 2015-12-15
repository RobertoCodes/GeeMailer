class RemoveColumnsSenderIdAndCategoryIdFromEmails < ActiveRecord::Migration
  def change
    remove_column :emails, :category_id, :integer
    remove_column :emails, :sender_id, :interger
  end
end
