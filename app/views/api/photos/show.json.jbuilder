json.partial! "api/photos/photo", photo: @photo, user: current_user

json.comments do
  @photo.comments.each do |comment|
    json.set! comment.id do
      json.id comment.id
      json.body comment.body
      json.username comment.author.username
      json.author_id comment.author_id
    end
  end
end
