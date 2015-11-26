json.extract!(
  email,
  :id, :subject, :body, :sender_id, :parent_email_id, :email_type, :category_id,
  :starred, :important, :trashed, :sender_email, :recipient_email, :read, :created_at
)
if show_children
  json.children email.children do |child|
    json.partial!('api/emails/email', email: child, show_children: true)
  end
end
