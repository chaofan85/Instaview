class Photo < ApplicationRecord

  belongs_to :user, class_name: "User", foreign_key: :user_id, primary_key: :id
  has_many :comments, class_name: 'Comment', foreign_key: :photo_id, primary_key: :id
  has_many :likes, class_name: "Like", foreign_key: :photo_id, primary_key: :id
  has_many :likers, through: :likes, source: :user

  has_attached_file :image, :s3_protocol => :https
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def likes_number
    self.likes.count
  end
end
