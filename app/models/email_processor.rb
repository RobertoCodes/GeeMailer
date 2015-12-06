class EmailProcessor
  def initialize(email)
    @email = email
  end

  def process
  	if User.find_by_username(@email[:to])
  		User.conversations.create!.emails.create!(subject: "Dinner", body: "Dinner Brah, I feel horrible I sent that shit before. That was really stupid of me. Let's get
lunch, it's totes on me brah!", sender_id: 1, email_type: "received", category_id: 2, read: true, recipient_email: "sonoflaertes@gmailer.com",
sender_email: "eVanRox@gmail.com", starred: false, trashed: false)
	end
  end

end