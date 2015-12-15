class Conversation < ActiveRecord::Base

  has_many :emails, dependent: :destroy

  belongs_to :user

  def self.find_by_category(current_user, category)

    case category

    when "starred", "/starred"
      current_user.conversations.includes(:emails).where("starred = true AND trashed = false")
        .references(:emails).order(updated_at: :desc)
    when "important", "/important"
      current_user.conversations.includes(:emails).where("important = true AND trashed = false")
        .references(:emails).order(updated_at: :desc)
    when "/", "inbox", "/inbox"
      current_user.conversations.includes(:emails).where("email_type = 'received' AND trashed = false")
        .references(:emails).order(updated_at: :desc)
    when "sent", "/sent"
      current_user.conversations.includes(:emails).where("email_type = 'sent' AND trashed = false")
        .references(:emails).order(updated_at: :desc)
    when "trash", "/trash"
      current_user.conversations.includes(:emails).where("trashed = true")
        .references(:emails).order(updated_at: :desc)
    end

  end


end
