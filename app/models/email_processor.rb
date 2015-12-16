class EmailProcessor
  def initialize(email)
    @email = email
  end

  def process
  	@user = User.find_by_username(@email.to[0][:email])
  	if @user
      #Regex expression parses header and returns 'Message-ID' header.
      message_id = @email.headers["Message-ID"]

      #Regex expression parses header and returns 'References' header.
      reference_message_id = @email.headers["References"]

      if reference_message_id != nil
        parent_email = Email.find_by_message_id(reference_message_id)
        if parent_email
          parent_email.conversation.emails.create!(subject: @email.subject,
          body: @email.body, email_type: "received", read: false,
          recipient_email: @email.to[0][:email], sender_email: @email.from[:email],
          sender_name: @email.from[:name],
          starred: false, trashed: false, message_id: message_id)
        else
      		@user.conversations.create!.emails.create!(
      			subject: @email.subject, body: @email.body, email_type: "received",
            read: false, recipient_email: @email.to[0][:email], sender_email: @email.from[:email],
            sender_name: @email.from[:name], starred: false, trashed: false, message_id: message_id)
          end
      else
        @user.conversations.create!.emails.create!(
          subject: @email.subject, body: @email.body, email_type: "received",
          read: false, recipient_email: @email.to[0][:email], sender_email: @email.from[:email],
          sender_name: @email.from[:name], starred: false, trashed: false, message_id: message_id)
	    end
  end

end
