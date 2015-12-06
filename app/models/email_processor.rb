class EmailProcessor
  def initialize(email)
    @email = email
  end

  def process
  	User.create!(username:"superman42", password:"superduper")
  end
end