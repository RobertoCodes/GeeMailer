# Schema Information

## emails
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
subject     | string    | not null
body        | text      | not null
sender_id   | integer   | not null, foreign key (references users), indexed
prev_email_id| integer  | foreign key (references emails), indexed
category_id | integer   | foreign key (references categories), indexed
starred     | boolean   | not null, default: false
trashed     | boolean   | not null, default: false


## contacts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
name        | string    | not null


Categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
