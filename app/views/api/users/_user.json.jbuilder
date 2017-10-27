json.extract! user, :id, :username
json.photos do
  json.array! user.photos do |photo|
    json.id photo.id
    json.image_url photo.image.url
    json.location photo.location
    json.caption photo.caption
  end
end
