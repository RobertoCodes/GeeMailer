json.extract!(
  conversation,
  :id, :first_email_id, :last_email_id, :num_emails
)

if show_emails
  json.emails conversation.emails do |email|
    json.partial!('api/emails/email', email: email, show_children: true)
  end
else
  last_email = conversation.emails.last
  json.num_emails do conversation.emails.count end
  json.last_email do json.partial!('api/emails/email', email: last_email, show_children: false) end
end
