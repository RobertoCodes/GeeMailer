class EmailMailer < ApplicationMailer

	def send_email (email, name)
		from_str = name + " <" + email.sender_email + ">"
		mail(to: email.recipient_email, subject: email.subject, content_type: "text/html",
			from: email.sender_email, body: email.html_body)
	end


end
