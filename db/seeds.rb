# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Email.destroy_all
User.destroy_all
Contact.destroy_all
Conversation.destroy_all



u1 = User.create!(username: "sonoflaertes@geemailer.com", password: "ulysses")

c1 = Conversation.create!(user_id: u1.id)
c2 = Conversation.create!(user_id: u1.id)
c3 = Conversation.create!(user_id: u1.id)

e1 = Email.create!(subject: "Lunch", body: "Duuuude, I feel horrible I sent that shit before. That was really stupid of me. Let's get
lunch, it's totes on me brah!", sender_id: 1, email_type: "received", category_id: 2, read: true, recipient_email: "sonoflaertes@geemailer.com",
sender_email: "eVanRox@gmail.com", sender_name: "Evan", starred: false, trashed: false)
e1.conversation_id = c1.id
e1.save!

e2 = Email.create!(subject: "The Check Last Weekend", body: "Hey dude, hope you are doing well. So, I hate to bring this up but,
this has kinda been messing with my head the last couple days. We were at that coffee shop and I thought it would be cool to pay for your drink, and yeah,
you said thank you but like it didn't really seem like you were that thankful. Like, I don't pick up checks for anyone. Ever! Yeah,
just wanted to clear the air on that. But we Gucci dude! Can't wait for next weekend! Peace!", sender_id: 2, read: true,
parent_email_id: 4, email_type: "received", category_id: 3, recipient_email: "sonoflaertes@geemailer.com",
sender_email: "eVanRox@gmail.com", sender_name: "Evan", starred: true, trashed: false)
e2.conversation_id = c2.id
e2.save!

e3 = Email.create!(subject: "The Church Needs You", body: "Paul, me, you, and Jesus need to talk. Come visit.", sender_id: 3,
 email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com", read: true,
sender_email: "MassWithMassey@gmail.com", sender_name: "Evan", starred: false, trashed: true)
e3.conversation_id = c3.id
e3.save!

e5 = Email.create!(subject: "Re: Lunch", body: "Ev, I'm down. Sunday?", sender_id: u1.id,
parent_email_id: e1.id, email_type: "sent", category_id: 2, recipient_email: "eVanRox@gmail.com", read: true,
sender_email: "sonoflaertes@geemailer.com",
starred: false, trashed: false)
e5.conversation_id = c1.id
c1.num_emails += 1
c1.save!
e5.save!

e4 = Email.create!(subject: "Re: Lunch", body: "Shit, I'm actually, uh uh, actually, baby stuff! Let's wait until you forget absolute
the whole check thing. haha! Dude, lets hang soon tho!", sender_id: 5, read: false,
parent_email_id: e5.id,
email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com",
sender_email: "eVanRox@gmail.com", starred: true, trashed: false)
e4.conversation_id = c1.id
c1.num_emails += 1
c1.save!
e4.save!

c4 = Conversation.create!(user_id: u1.id)
c4.emails.create!(subject: "Re: Lunch", body: "Shit, I'm actually, uh uh, actually, baby stuff! Let's wait until you forget absolute
the whole check thing. haha! Dude, lets hang soon tho!", sender_id: 5, read: false,
parent_email_id: e5.id,
email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com",
sender_email: "eVanRox@gmail.com", starred: true, trashed: false)
c5 = Conversation.create!(user_id: u1.id)
c5.emails.create!(subject: "Re: Lunch", body: "Shit, I'm actually, uh uh, actually, baby stuff! Let's wait until you forget absolute
the whole check thing. haha! Dude, lets hang soon tho!", sender_id: 5, read: false,
parent_email_id: e5.id,
email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com",
sender_email: "eVanRox@gmail.com", starred: true, trashed: false)
c7 = Conversation.create!(user_id: u1.id)
c7.emails.create!(subject: "Re: Lunch", body: "Shit, I'm actually, uh uh, actually, baby stuff! Let's wait until you forget absolute
the whole check thing. haha! Dude, lets hang soon tho!", sender_id: 5, read: false,
parent_email_id: e5.id,
email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com",
sender_email: "eVanRox@gmail.com", starred: true, trashed: false)
c8 = Conversation.create!(user_id: u1.id)
c8.emails.create!(subject: "Re: Lunch", body: "Shit, I'm actually, uh uh, actually, baby stuff! Let's wait until you forget absolute
the whole check thing. haha! Dude, lets hang soon tho!", sender_id: 5, read: false,
parent_email_id: e5.id,
email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com",
sender_email: "eVanRox@gmail.com", starred: true, trashed: false)
c9 = Conversation.create!(user_id: u1.id)
c9.emails.create!(subject: "Re: Lunch", body: "Shit, I'm actually, uh uh, actually, baby stuff! Let's wait until you forget absolute
the whole check thing. haha! Dude, lets hang soon tho!", sender_id: 5, read: false,
parent_email_id: e5.id,
email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com",
sender_email: "eVanRox@gmail.com", starred: true, trashed: false)
c10 = Conversation.create!(user_id: u1.id)
c10.emails.create!(subject: "Re: Lunch", body: "Shit, I'm actually, uh uh, actually, baby stuff! Let's wait until you forget absolute
the whole check thing. haha! Dude, lets hang soon tho!", sender_id: 5, read: false,
parent_email_id: e5.id,
email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com",
sender_email: "eVanRox@gmail.com", starred: true, trashed: false)
c11 = Conversation.create!(user_id: u1.id)
c11.emails.create!(subject: "Re: Lunch", body: "Shit, I'm actually, uh uh, actually, baby stuff! Let's wait until you forget absolute
the whole check thing. haha! Dude, lets hang soon tho!", sender_id: 5, read: false,
parent_email_id: e5.id,
email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com",
sender_email: "eVanRox@gmail.com", starred: true, trashed: false)
c12 = Conversation.create!(user_id: u1.id)
c12.emails.create!(subject: "Re: Lunch", body: "Shit, I'm actually, uh uh, actually, baby stuff! Let's wait until you forget absolute
the whole check thing. haha! Dude, lets hang soon tho!", sender_id: 5, read: false,
parent_email_id: e5.id,
email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com",
sender_email: "eVanRox@gmail.com", starred: true, trashed: false)
c13 = Conversation.create!(user_id: u1.id)
c13.emails.create!(subject: "Re: Lunch", body: "Shit, I'm actually, uh uh, actually, baby stuff! Let's wait until you forget absolute
the whole check thing. haha! Dude, lets hang soon tho!", sender_id: 5, read: false,
parent_email_id: e5.id,
email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com",
sender_email: "eVanRox@gmail.com", starred: true, trashed: false)


#
# e6 = Email.create!(subject: "It's not working!", body: "Hello, I purchased your 'miracle' product last week and
# so far my measurements haven't changed. I was promised two more inches by now. Please send my money back.", sender_id: u1.id,
# email_type: "sent", category_id: 3, recipient_email: "getLong@gmail.com", sender_email: "sonoflaertes@geemailer.com", read: true,
# starred: true, trashed: false)
#
# e7 = Email.create!(subject: "Subject3(sent)", body: "Nope, can't make it", sender_id: u1.id,
# email_type: "sent", category_id: 2, recipient_email: "frank@gmail.com", read: true,
# starred: false, trashed: true)
#
# e8 = Email.create!(subject: "Lunch", body: "Duuuude, I feel horrible I sent that shit before. That was really stupid of me. Let's get
# lunch, it's totes on me brah!", sender_id: 1, email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com", read: false,
# sender_email: "eVanRox@gmail.com", starred: false, trashed: false)
#
# e9 = Email.create!(subject: "The Check Last Weekend", body: "Hey dude, hope you are doing well. So, I hate to bring this up but,
# this has kinda been messing with my head the last couple days. We were at that coffee shop and I thought it would be cool to pay for your drink, and yeah,
# you said thank you but like it didn't really seem like you were that thankful. Like, I don't pick up checks for anyone. Ever! Yeah,
# just wanted to clear the air on that. But we Gucci dude! Can't wait for next weekend! Peace!", sender_id: 2, read: true,
# parent_email_id: 4, email_type: "received", category_id: 3, recipient_email: "sonoflaertes@geemailer.com",
# sender_email: "eVanRox@gmail.com", starred: true, trashed: false)
#
# e10 = Email.create!(subject: "The Church Needs You", body: "Paul, me, you, and Jesus need to talk. Come visit.", sender_id: 3,
#  email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com", read: false,
# sender_email: "MassWithMassey@gmail.com", starred: false, trashed: true)
#
# e11 = Email.create!(subject: "Re: Lunch", body: "Ev, I'm down. Sunday?", sender_id: u1.id,
# parent_email_id: e1.id, email_type: "sent", category_id: 2, recipient_email: "eVanRox@gmail.com", read: false,
# sender_email: "sonoflaertes@geemailer.com",
# starred: false, trashed: false)
#
# e12 = Email.create!(subject: "Re: Lunch", body: "Shit, I'm actually, uh uh, actually, baby stuff! Let's wait until you forget absolute
# the whole check thing. haha! Dude, lets hang soon tho!", sender_id: 5, read: true,
# parent_email_id: e5.id,
# email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com",
# sender_email: "eVanRox@gmail.com", starred: true, trashed: false)
#
#
# e13 = Email.create!(subject: "It's not working!", body: "Hello, I purchased your 'miracle' product last week and
# so far my measurements haven't changed. I was promised two more inches by now. Please send my money back.", sender_id: u1.id,
# email_type: "sent", category_id: 3, recipient_email: "getLong@gmail.com", sender_email: "sonoflaertes@geemailer.com", read: true,
# starred: true, trashed: false)
#
# e14 = Email.create!(subject: "Subject3(sent)", body: "Nope, can't make it", sender_id: u1.id,
# email_type: "sent", category_id: 2, recipient_email: "frank@gmail.com", read: true,
# starred: false, trashed: true)
#
# e15 = Email.create!(subject: "Lunch", body: "Duuuude, I feel horrible I sent that shit before. That was really stupid of me. Let's get
# lunch, it's totes on me brah!", sender_id: 1, email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com", read: true,
# sender_email: "eVanRox@gmail.com", starred: false, trashed: false)
#
# e16 = Email.create!(subject: "The Check Last Weekend", body: "Hey dude, hope you are doing well. So, I hate to bring this up but,
# this has kinda been messing with my head the last couple days. We were at that coffee shop and I thought it would be cool to pay for your drink, and yeah,
# you said thank you but like it didn't really seem like you were that thankful. Like, I don't pick up checks for anyone. Ever! Yeah,
# just wanted to clear the air on that. But we Gucci dude! Can't wait for next weekend! Peace!", sender_id: 2, read: true,
# parent_email_id: 4, email_type: "received", category_id: 3, recipient_email: "sonoflaertes@geemailer.com",
# sender_email: "eVanRox@gmail.com", starred: true, trashed: false)
#
# e17 = Email.create!(subject: "The Church Needs You", body: "Paul, me, you, and Jesus need to talk. Come visit.", sender_id: 3,
#  email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com", read: false,
# sender_email: "MassWithMassey@gmail.com", starred: false, trashed: true)
#
# e18 = Email.create!(subject: "Re: Lunch", body: "Ev, I'm down. Sunday?", sender_id: u1.id,
# parent_email_id: e1.id, email_type: "sent", category_id: 2, recipient_email: "eVanRox@gmail.com", read: false,
# sender_email: "sonoflaertes@geemailer.com",
# starred: false, trashed: false)
#
# e19 = Email.create!(subject: "Re: Lunch", body: "Shit, I'm actually, uh uh, actually, baby stuff! Let's wait until you forget absolute
# the whole check thing. haha! Dude, lets hang soon tho!", sender_id: 5, read: true,
# parent_email_id: e5.id,
# email_type: "received", category_id: 2, recipient_email: "sonoflaertes@geemailer.com",
# sender_email: "eVanRox@gmail.com", starred: true, trashed: false)
#
#
# e20 = Email.create!(subject: "It's not working!", body: "Hello, I purchased your 'miracle' product last week and
# so far my measurements haven't changed. I was promised two more inches by now. Please send my money back.", sender_id: u1.id, read: true,
# email_type: "sent", category_id: 3, recipient_email: "getLong@gmail.com", sender_email: "sonoflaertes@geemailer.com",
# starred: true, trashed: false)
#
# e21 = Email.create!(subject: "Subject3(sent)", body: "Nope, can't make it", sender_id: u1.id, read: true,
# email_type: "sent", category_id: 2, recipient_email: "frank@gmail.com",
# starred: false, trashed: true)


c1 = Contact.create!(name: "Evan R.", owner_id: u1.id,
  contact_email_address: "eVanRox@gmail.com")

c2 = Contact.create!(name: "Massey", owner_id: u1.id,
  contact_email_address: "MassWithMassey@gmail.com")
