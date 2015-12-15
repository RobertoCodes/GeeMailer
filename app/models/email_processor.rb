class EmailProcessor
  def initialize(email)
    @email = email
  end

  def process
  	@user = User.find_by_username(@email.to[0][:email])
  	if @user
      parent_email = Email.find_by_message_id(@email.headers[:references])
      if parent_email
        parent_email.conversation.create!(subject: @email.subject,
        body: @email.body, email_type: "received", read: false,
        recipient_email: @email.to[0][:email], sender_email: @email.from[:email],
        sender_name: @email.from[:name],
        starred: false, trashed: false, message_id: @email.headers["message-id"])

      else
    		@user.conversations.create!.emails.create!(
    			subject: @email.subject, body: @email.body, email_type: "received",
          read: false, recipient_email: @email.to[0][:email], sender_email: @email.from[:email],
          sender_name: @email.from[:name], starred: false, trashed: false, message_id: @email.headers["message-id"])
      end

	  end
  end

end
