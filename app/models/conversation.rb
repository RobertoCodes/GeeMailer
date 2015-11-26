class Conversation < ActiveRecord::Base

  has_many :emails

  belongs_to :user

  def self.find_by_category(current_user, category)

    case category
    when "starred", "/starred"
      current_user.conversations.includes(:emails).where("starred = true AND trashed = false")
        .references(:emails)
    when "important", "/important"
      current_user.conversations.includes(:emails).where("important = true AND trashed = false")
        .references(:emails)
    when "/", "inbox", "/inbox"
      current_user.conversations.includes(:emails).where("email_type = 'received' AND trashed = false")
        .references(:emails)
    when "sent", "/sent"
      current_user.conversations.includes(:emails).where("email_type = 'sent' AND trashed = false")
        .references(:emails)
    end

  end


end
