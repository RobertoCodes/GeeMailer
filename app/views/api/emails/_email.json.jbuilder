json.extract!(
  email,
  :id, :subject, :body, :parent_email_id, :email_type, :starred, :important,
  :trashed, :sender_email, :recipient_email, :read, :created_at, :sender_name,
  :conversation_id
)
if show_children
  json.children email.children do |child|
    json.partial!('api/emails/email', email: child, show_children: true)
  end
end
