# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Email.destroy_all

e1 = Email.create!(subject: "Subject1", body: "Let's get lunch", sender_id: 1,
parent_email_id: 1, email_type: "sent", category_id: 2, recipient_email: "joe@gmail.com",
starred: false, trashed: false)

e2 = Email.create!(subject: "Subject2", body: "Okay, let's do it.", sender_id: 2,
parent_email_id: 4, email_type: "sent", category_id: 3, recipient_email: "sam@gmail.com"
starred: true, trashed: false)

e3 = Email.create!(subject: "Subject3", body: "Nope, can't make it", sender_id: 3,
parent_email_id: e1.id, email_type: "sent", category_id: 2, recipient_email: "frank@gmail.com"
starred: false, trashed: true)

e4 = Email.create!(subject: "Subject4", body: "Sure, I'm down", sender_id: 5,
parent_email_id: e1.id, email_type: "sent", category_id: 2, recipient_email: "joe@gmail.com"
starred: true, trashed: false)
