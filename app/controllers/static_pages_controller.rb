class StaticPagesController < ApplicationController

  before_action :check_signed_in

  def root
  end

end
