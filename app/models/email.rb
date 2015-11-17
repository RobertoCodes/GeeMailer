class Email < ActiveRecord::Base
  validates :subject, :body, :sender_id, :email_type, :category_id, presence: true

  def children
    Email.where("parent_email_id = ?", self.id)
  end




end
