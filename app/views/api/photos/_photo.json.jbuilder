
  json.photoId photo.id
  json.location photo.location
  json.user_id photo.user_id
  json.author photo.user.username
  json.caption photo.caption
  json.image_url asset_path(photo.image.url)
  json.likes photo.likes_number
  json.liked_by_current_user current_user.liked_by_current_user(photo)
  json.author_avatar asset_path(photo.user.avatar.url)
  json.comment_ids photo.comment_ids
  json.created_at photo.created_at
