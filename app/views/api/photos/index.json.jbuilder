@photos.each do |photo|
  json.set! photo.id do
    json.partial! "api/photos/photo.json.jbuilder", photo: photo, user: @user
  end
end
