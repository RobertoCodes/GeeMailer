# GeeMailer

[Live link][Live]

[Live]: http://www.geemailer.com

## About

GeeMailer is a web application inspired by Gmail built using Ruby on Rails
and React.js. GeeMailer allows users to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Send, receive, delete and reply to emails
- [ ] Add Contacts
- [ ] Organize emails in different categories (and star/mark)
- [ ] Search emails by content/subject/user
- [ ] Paginate through a user's Inbox

<!-- ## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md -->

<!-- ## Implementation Timeline

### Phase 1: User Authentication, Message/email Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for messages/emails.

[Details][phase-one]

### Phase 2: Flux Architecture and Email/message CRUD (3 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a email store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the "EmailsIndex", `EmailsIndexItems` and `EmailForm` for
writing new emails or replying to emails. The EmailsIndexItems will also link to individual
"EmailDetailedViews" which have their own "EmailReplyForm."


At the end of Phase 2, Emails can be created, read, saved and destroyed in the browser. Emails should
save to the database as drafts when the form is idle for a set time period. Drafts should be deleted from database if/when email is sent.

Lastly, I will assign some classes to the React components in order to implement some
basic style with CSS.

[Details][phase-two]

### Phase 3:  Categories/Stars and Contacts (1.5 days)

Phase 3 adds organization to the messages. Messages can now be starred, and/or moved
to other inbox categories. Users can search the Inbox/Outboxes for emails by content/subject/user (would like
this to be a live updating search box) in a "Search" component nested in the Emails Index view.

I would also like to add ability to add contacts if I can fit it in.

[Details][phase-three]

### Phase 4: Clean up the style (1 day)

Spend the day really making the website views resemble Gmail using CSS. Most important and most iconic will
be the popup new email form and collapsible emails in an email chain.

[Details][phase-four]

### Phase 5: Make own categories and Trash (1 day)

Phase 5 introduces two new features. First, users can add their own inbox/outbox categories and
move mail into those sections. I will also add the ability to delete items into the trash section, where
users can then decide to permanently delete messages.

[Details][phase-five]

### Phase 6: Advanced Styling (1 day)

Make the site look just like Gmail. I would also like to make my email chains easier to follow than Gmail does, with clear dilineation between emails and who is the sender. -->


### Bonus Features (Soon to Come!)
- [ ] Save Drafts of emails to edit and send later (possible autosave)
- [ ] Fowarding emails, attaching files.
- [ ] Live chat with contacts that are online
- [ ] Ability to have more than one account which you can switch between.
- [ ] Hover over an inbox item to popout a preivew of the email.
- [ ] Add option to label emails with different tags.


<!-- [phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md -->
