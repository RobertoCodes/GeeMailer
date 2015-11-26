class Email < ActiveRecord::Base
  validates :subject, :body, :sender_id, :email_type, :category_id, presence: true

  include PgSearch
  multisearchable :against => [:subject, :body, :recipient_email, :sender_email]

  def children
    Email.where("parent_email_id = ? AND trashed != true", self.id)
  end

  def self.find_by_category(user_emails, category)
    case category
    when "starred", "/starred"
      user_emails.where("starred = true AND trashed = false")
    when "important", "/important"
      user_emails.where("important = true AND trashed = false")
    when "/", "inbox", "/inbox"
      user_emails.where("email_type = 'received' AND trashed = false")
    when "sent", "/sent"
      user_emails.where("email_type = 'sent' AND trashed = false")
    when "trash", "/trash"
      user_emails.where("trashed = true")
    end
  end


  def self.find_by_user (user_id, username)
    Email.where("sender_id = ? OR recipient_email = ?", user_id, username)
  end

  def self.find_desired_emails (user_id, username, category)
    user_emails = self.find_by_user(user_id, username)
    category_emails = self.find_by_category(user_emails, category)
  end

  def self.last_emails (category_emails)
    last_emails = []
    category_emails.each do |email|
      last_emails.push(email.find_relatives.order("id DESC").first)
    end
    last_emails
  end

  #create conversations, stores id of last email, count of emails, emails have conversation id,
  def find_relatives
    Email.where("conversation_id = ?", self.conversation_id)
  end


end
