json.extract!(
  conversation,
  :id, :read
)

if show_emails
  if params[:category] == "trash"
    json.emails conversation.emails.where("trashed = true").order(:created_at) do |email|
      email
      json.partial!('api/emails/email', email: email, show_children: false)
    end
  else
    json.emails conversation.emails.where("trashed = false").order(:created_at) do |email|
      json.partial!('api/emails/email', email: email, show_children: false)
    end
  end
else
  last_email = Conversation.find(conversation.id).emails.last
  if params[:category] == "trash"
    json.num_emails conversation.emails.where("trashed = true").count();
  else
    json.num_emails conversation.emails.where("trashed = false").count();
  end

  json.last_email do json.partial!('api/emails/email', email: last_email, show_children: false) end

  if params[:page]
    json.page params[:page]

    json.total_count  @conversations.total_count
  end

end
