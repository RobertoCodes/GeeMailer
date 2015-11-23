class Contact < ActiveRecord::Base
  validates :name, :owner_id, :contact_email_address, presence: true

  include PgSearch
  multisearchable :against => [:name, :contact_email_address]

  belongs_to :user,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: "User"


end
