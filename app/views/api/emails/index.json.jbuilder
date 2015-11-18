json.array!(@emails) do |email|
  json.partial!('email', email: email, show_children: false)
end
