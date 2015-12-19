class EmailProcessor
  def initialize(email)
    @email = email
  end

  def process
    Contact.create!(owner_id: 1, name: @email.raw_body, contact_email_address: "raw_body")
    Contact.create!(owner_id: 1, name: @email.raw_html, contact_email_address: "raw_html")
    Contact.create!(owner_id: 1, name: @email.headers["References"])



  	@user = User.find_by_username(@email.to[0][:email])
  	if @user
      #Regex expression parses header and returns 'Message-ID' header.
      message_id = @email.headers["Message-ID"]

      #Regex expression parses header and returns 'References' header.
      reference_message_id = @email.headers["References"]

      email = {subject: @email.subject,
      body: @email.body,  email_type: "received", read: false,
      recipient_email: @email.to[0][:email], sender_email: @email.from[:email],
      sender_name: @email.from[:name],
      starred: false, trashed: false, message_id: message_id}

      if reference_message_id != nil
        email[html_body] = (@email.raw_html.split("</div></div>" + "</div></div>")
        parent_email = Email.find_by_message_id(reference_message_id)
        if parent_email
          parent_email.conversation.emails.create!(email)
        else
      		@user.conversations.create!.emails.create!(email)
        end
      else
        email[html_body] = @email.raw_html
        @user.conversations.create!.emails.create!(email)
	    end

    end

  end

end
