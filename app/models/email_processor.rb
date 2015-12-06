class EmailProcessor
  def initialize(email)
    @email = email
  end

  def process
  	@user = User.find_by_username(@email.to[0][:email])
  	if @user
  		@user.conversations.create!.emails.create!(
  			subject: @email.subject, body: @email.body, sender_id: 1, email_type: "received", category_id: 2, read: false, 
  			recipient_email: @email.to[0][:email], sender_email: @email.from[:email], 
  			starred: false, trashed: false)
	end
  end

end