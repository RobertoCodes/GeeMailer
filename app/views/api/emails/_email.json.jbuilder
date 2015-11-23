json.extract!(
  email,
  :id, :subject, :body, :sender_id, :parent_email_id, :email_type, :category_id,
  :starred, :trashed, :sender_email, :recipient_email, :read
)
if show_children
  json.children email.children do |child|
    json.partial!('email', email: child, show_children: true)
  end
end
