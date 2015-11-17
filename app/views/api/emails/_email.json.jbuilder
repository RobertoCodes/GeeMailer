json.extract!(
  email,
  :id, :subject, :body, :sender_id, :parent_email_id, :email_type, :category_id,
  :starred, :trashed
)
json.child_emails email.children, partial: 'api/emails/email', as: :email
