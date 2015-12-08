json.results do
  json.array! @search_results.map(&:searchable) do |result|
    if result.class == Contact
      json.partial! "api/contacts/contact", contact: result
      json._type "Contact"
    elsif result.parent_email_id == nil
      json.partial! "api/emails/email", email: result, show_children: false
      json._type "Email"
    end
  end
end
