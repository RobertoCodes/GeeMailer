json.partial!('api/emails/email', email: @email, show_children: true)
# json.email json.partial!('email', email: @email)
# json.array!(@children) do |child|
#   json.partial!('email', email: child)
# end
