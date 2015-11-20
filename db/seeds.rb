# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Email.destroy_all
User.destroy_all

u1 = User.create!(username: "sonoflaertes@gmail.com", password: "ulysses")

e1 = Email.create!(subject: "Subject1(received)", body: "Let's get lunch", sender_id: 1,
parent_email_id: 1, email_type: "received", category_id: 2, recipient_email: "sonoflaertes@gmail.com",
starred: false, trashed: false)

e2 = Email.create!(subject: "Subject2(received)(starred)", body: "Okay, let's do it.", sender_id: 2,
parent_email_id: 4, email_type: "received", category_id: 3, recipient_email: "sonoflaertes@gmail.com",
starred: true, trashed: false)

e3 = Email.create!(subject: "Subject3", body: "Nope, can't make it", sender_id: 3,
parent_email_id: e1.id, email_type: "received", category_id: 2, recipient_email: "sonoflaertes@gmail.com",
starred: false, trashed: true)

e4 = Email.create!(subject: "Subject4(starred)", body: "Sure, I'm down", sender_id: 5,
parent_email_id: e1.id, email_type: "received", category_id: 2, recipient_email: "sonoflaertes@gmail.com",
starred: true, trashed: false)

e5 = Email.create!(subject: "Party(sent)", body: "Let's get lunch", sender_id: u1.id,
parent_email_id: 1, email_type: "sent", category_id: 2, recipient_email: "joe@gmail.com",
starred: false, trashed: false)

e6 = Email.create!(subject: "Subject2(sent)(starred)", body: "Okay, let's do it.", sender_id: u1.id,
parent_email_id: 4, email_type: "sent", category_id: 3, recipient_email: "sam@gmail.com",
starred: true, trashed: false)

e7 = Email.create!(subject: "Subject3(sent)", body: "Nope, can't make it", sender_id: u1.id,
parent_email_id: e1.id, email_type: "sent", category_id: 2, recipient_email: "frank@gmail.com",
starred: false, trashed: true)

e8 = Email.create!(subject: "Subject4(sent)(starred)", body: "Sure, I'm down", sender_id: u1.id,
parent_email_id: e1.id, email_type: "sent", category_id: 2, recipient_email: "joe@gmail.com",
starred: true, trashed: false)
