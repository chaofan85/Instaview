json.photoId photo.id
json.location photo.location
json.user_id photo.user_id
json.caption photo.caption
json.image_url asset_path(photo.image.url)
json.likes photo.likes_number
json.liked_by_current_user user.liked_photos.include?(photo)
