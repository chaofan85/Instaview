class Comment < ApplicationRecord
  validates :author_id, :photo_id, :body, presence: true

  belongs_to :photo,
    class_name: 'Photo',
    foreign_key: :photo_id,
    primary_key: :id

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :parent_comment,
    class_name: 'Comment',
    foreign_key: :parent_comment_id,
    primary_key: :id,
    optional: true

  has_many :child_comments,
    class_name: 'Comment',
    foreign_key: :parent_comment_id,
    primary_key: :id
end
