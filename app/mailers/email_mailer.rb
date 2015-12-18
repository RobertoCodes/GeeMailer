class EmailMailer < ApplicationMailer

	def send_email (email, name)
		from_str = name + " <" + email.sender_email + ">"
		mail(to: email.recipient_email, subject: email.subject, content_type: "text/plain",
			from: email.sender_email, body: email.body)
	end


end
