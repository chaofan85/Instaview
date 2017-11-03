  json.extract! user, :id, :username, :post_number
  json.followed_by_current_user user.followed_by_current_user(current_user)
  json.avatar_url asset_path(user.avatar.url)
  json.follower_num user.follower_num
  json.following_num user.following_num
  json.followees user.followings
  json.photo_ids user.photo_ids
  json.feed_ids user.feed_ids

# json.photos do
#   user.photos.each do |photo|
#     json.set! photo.id do
#       json.partial! "api/photos/photo.json.jbuilder", photo: photo, user: user
#     end
#   end
# end
