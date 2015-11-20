class Email < ActiveRecord::Base
  validates :subject, :body, :sender_id, :email_type, :category_id, presence: true

  def children
    Email.where("parent_email_id = ?", self.id)
  end

  def self.find_by_category(user_emails, category)
    case category
    when "starred", "/starred"
      user_emails.where("starred = true")
    when "important", "/important"
      user_emails.where("important = true")
    when "/", "inbox", "/inbox"
      user_emails.where("email_type = 'received'")
    when "sent", "/sent"
      user_emails.where("email_type = 'sent'")
    end
  end

  def self.find_by_user (user_id, username)
    Email.where("sender_id = ? OR recipient_email = ?", user_id, username)
  end

  def self.find_desired_emails (user_id, username, category)
    user_emails = self.find_by_user(user_id, username)
    self.find_by_category(user_emails, category)
  end


end
