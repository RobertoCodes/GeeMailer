class EmailProcessor
  def initialize(email)
    @email = email
  end

  def process
  	@user = User.find_by_username(@email.to[0][:email])
  	if @user
      raw_header = @email.headers
      #Regex expression parses header and returns 'Message-ID' header.
      message_id = raw_header[/#{"Message-ID"}(.*?)#{"In-Reply-To"}/m, 1][/#{"<"}(.*?)#{">"}/m, 1]

      #Regex expression parses header and returns 'References' header.
      reference_message_id = raw_header[/#{"References"}(.*?)#{"Subject"}/m, 1][/#{"<"}(.*?)#{">"}/m, 1]

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

	  end
  end

end
