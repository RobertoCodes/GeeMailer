# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151120222218) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contacts", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string  "name",     null: false
  end

  add_index "contacts", ["owner_id"], name: "index_contacts_on_owner_id", using: :btree

  create_table "emails", force: :cascade do |t|
    t.string   "subject",                         null: false
    t.text     "body",                            null: false
    t.integer  "sender_id",                       null: false
    t.integer  "parent_email_id"
    t.string   "email_type",                      null: false
    t.integer  "category_id",                     null: false
    t.boolean  "starred",         default: false
    t.boolean  "trashed",         default: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "recipient_email"
    t.string   "sender_email"
  end

  add_index "emails", ["category_id"], name: "index_emails_on_category_id", using: :btree
  add_index "emails", ["parent_email_id"], name: "index_emails_on_parent_email_id", using: :btree
  add_index "emails", ["sender_id"], name: "index_emails_on_sender_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest"
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
