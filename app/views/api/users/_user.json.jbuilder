json.extract! user, :id, :username, :post_number
json.followed_by_current_user user.followed_by_current_user(current_user)
json.avatar_url asset_path(user.avatar.url)
json.follower_num user.follower_num
json.following_num user.following_num

json.followers do
  json.array! user.followers do |follower|
    json.id follower.id
    json.name follower.username
    json.real_name follower.fullname
    json.avatar_url follower.avatar.url
    json.followed_by_current_user follower.followed_by_current_user(current_user)
  end
end

# json.followers user.followers
json.followings do
  json.array! user.followings do |following|
    json.id following.id
    json.name following.username
    json.real_name following.fullname
    json.avatar_url following.avatar.url
    json.followed_by_current_user following.followed_by_current_user(current_user)
  end
end
# json.followees user.followings
json.photo_ids user.photo_ids
json.feed_ids user.feed_ids
