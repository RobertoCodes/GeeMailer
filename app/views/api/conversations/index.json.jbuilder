json.array!(@conversations) do |conversation|
  json.partial!('api/conversations/conversation', conversation: conversation, show_emails: false)
end
