class EmailProcessor
  def initialize(email)
    @email = email
  end

  def process
  	Email.create!(@email)
  end
end