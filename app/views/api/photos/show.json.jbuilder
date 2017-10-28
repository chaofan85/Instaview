json.partial! "photo", photo: @photo, user: current_user
json.comment_ids @photo.comments
