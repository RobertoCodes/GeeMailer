class Api::SearchController < ApplicationController

  def index
    @search_results = PgSearch
     .multisearch(params[:search])
     .includes(:searchable)
  end

end
