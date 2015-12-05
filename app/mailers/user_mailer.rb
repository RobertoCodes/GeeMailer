class UserMailer < ApplicationMailer
	default from: "robertandrewromano@gmail.com"

	def welcome_email(user)
		@user = user
		@url = 'http://www.google.com'
		mail(to: @user.username, subject: 'test welcome email')
	end





end
