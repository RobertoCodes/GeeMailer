class EmailMailer < ApplicationMailer

	def send_email(email)
		mail(to: email.recipient_email, subject: email.subject, from: email.sender_email, body: email.body)
	end


end
