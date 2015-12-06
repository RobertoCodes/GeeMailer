class EmailListenersController < ApplicationController

	skip_before_filter :verify_authenticity_token


	def create
		User.create!(username:"essaygrf@gmail.com", password:"superduper42")
		redirect_to root_url


	end

end