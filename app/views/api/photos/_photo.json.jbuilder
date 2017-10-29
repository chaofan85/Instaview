json.photoId photo.id
json.location photo.location
json.user_id photo.user_id
json.caption photo.caption
json.image_url asset_path(photo.image.url)
json.likes photo.likes_number
json.liked_by_current_user user.liked_photos.include?(photo)
json.comment_ids photo.comment_ids
json.comments do
  json.array! photo.comments do |comment|
    json.body comment.body
    json.username comment.author.username
    json.id comment.id
  end
end
