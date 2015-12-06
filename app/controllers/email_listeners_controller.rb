class EmailListenersController < ApplicationController

	def create
		User.create!(username:"essaygrf@gmail.com", password:"superduper42")
		redirect_to root_url


	end

end