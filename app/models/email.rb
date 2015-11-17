class Email < ActiveRecord::Base
  validates :subject, :body, :sender_id, :email_type, :category_id, presence: true


end
