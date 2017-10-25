class Photo < ApplicationRecord

  belongs_to :user, class_name: "User", foreign_key: :user_id, primary_key: :id

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
