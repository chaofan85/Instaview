class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }

  has_many :photos, class_name: 'Photo', foreign_key: :user_id, primary_key: :id
  has_many :comments, class_name: 'Comment', foreign_key: :author_id, primary_key: :id
  has_many :likes, class_name: 'Like', foreign_key: :liker_id, primary_key: :id
  has_many :liked_photos, through: :likes, source: :photo

  has_many :follows, class_name: 'Follow', foreign_key: :follower_id, primary_key: :id
  has_many :followed, class_name: 'Follow', foreign_key: :followee_id, primary_key: :id

  has_many :followers, through: :followed, source: :follower
  has_many :followings, through: :follows, source: :followed_user

  has_attached_file :avatar, default_url: ("avatar.png"), :s3_protocol => :https
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def post_number
    self.photos.count
  end

  def liked_by_current_user(photo)
    self.liked_photos.include?(photo)
  end

  def get_user(username)
    User.find_by(username: username)
  end

  def followed_by_current_user(user)
    self.followers.include?(user)
  end

  def follower_num
    self.followers.count
  end

  def following_num
    self.followings.count
  end

  def feed_ids
    photos = self.photos
    photos_of_people_i_follow = []
    self.followings.includes(:photos).each do |following|
      following.photos.each do |photo|
        photos_of_people_i_follow << photo
      end
    end

    photos += photos_of_people_i_follow
    feed_ids = photos.map{|p| p.id}
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
