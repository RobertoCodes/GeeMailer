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

ActiveRecord::Schema.define(version: 20151218075131) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contacts", force: :cascade do |t|
    t.integer "owner_id",              null: false
    t.string  "name",                  null: false
    t.string  "contact_email_address"
  end

  add_index "contacts", ["owner_id"], name: "index_contacts_on_owner_id", using: :btree

  create_table "conversations", force: :cascade do |t|
    t.integer  "user_id"
    t.boolean  "read",       default: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "conversations", ["user_id"], name: "index_conversations_on_user_id", using: :btree

  create_table "emails", force: :cascade do |t|
    t.string   "subject",                         null: false
    t.text     "body",                            null: false
    t.integer  "parent_email_id"
    t.string   "email_type",                      null: false
    t.boolean  "starred",         default: false
    t.boolean  "trashed",         default: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "recipient_email"
    t.string   "sender_email"
    t.boolean  "read"
    t.boolean  "important",       default: false
    t.integer  "conversation_id"
    t.string   "sender_name"
    t.string   "message_id"
    t.string   "html_body"
    t.string   "recipient_name"
  end

  add_index "emails", ["conversation_id"], name: "index_emails_on_conversation_id", using: :btree
  add_index "emails", ["parent_email_id"], name: "index_emails_on_parent_email_id", using: :btree

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest"
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
