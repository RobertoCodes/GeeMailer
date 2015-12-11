json.extract!(
  conversation,
  :id, :read, :num_emails
)

if show_emails
  json.emails conversation.emails.order(:created_at) do |email|
    json.partial!('api/emails/email', email: email, show_children: false)
  end
else
  last_email = conversation.emails.last
  json.num_emails do conversation.emails.count end
  json.last_email do json.partial!('api/emails/email', email: last_email, show_children: false) end
end
