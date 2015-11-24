json.results do
  json.array! @search_results.map(&:searchable) do |result|
    if result.class == Contact
      json.partial! "api/contacts/contact", contact: result
      json._type "Contact"
    else
      json.partial! "api/emails/email", email: result, show_children: false
      json._type "Email"
    end
  end
end
