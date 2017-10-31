json.extract! user, :id, :username, :post_number
# json.fetched_user_id user.get_user(username)
json.photos do
  user.photos.each do |photo|
    json.set! photo.id do
      json.partial! "api/photos/photo.json.jbuilder", photo: photo, user: user
    end
  end
end
