json.photo do
  json.photoId photo.id
  json.location photo.location
  json.user_id photo.user_id
  json.caption photo.caption
  json.image_url asset_path(photo.image.url)
  json.likes photo.likes_number
  json.liked_by_current_user user.liked_by_current_user(photo)
  json.comment_ids photo.comment_ids
end


json.comments do
  json.set! photo.id do
    json.array! photo.comments do |comment|
        json.id comment.id
        json.body comment.body
        json.username comment.author.username
        json.author_id comment.author_id
    end
  end
end
