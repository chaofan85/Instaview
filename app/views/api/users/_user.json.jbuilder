# sorted_photos = user.photos.sort_by{ |photo| photo[:created_at] }

json.extract! user, :id, :username
json.photos do
  user.photos.each do |photo|
    json.set! photo.id do
      json.partial! "api/photos/photo.json.jbuilder", photo: photo
    end
  end
end
