class Email < ActiveRecord::Base
  validates :subject, :body, :sender_id, :email_type, :category_id, presence: true

  def children
    Email.where("parent_email_id = ?", self.id)
  end

  def self.find_by_category(category)
    case category
    when "/starred"
      Email.where("starred = true")
    when "/important"
      Email.where("important = true")
    when "/", "/inbox"
      Email.where("email_type = 'received'")
    when "/sent"
      Email.where("email_type = 'sent'")
    end

  end




end
