json.partial!('email', email: @email)
json.array!(@children) do |child|
  json.partial!('email', email: child)
end
