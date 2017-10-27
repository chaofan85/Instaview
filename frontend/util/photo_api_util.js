export const fetchPhotos = (userId) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users',
  });
};

export const createPhoto = (formData) => {
  return $.ajax({
    url: '/api/photos',
    type: 'POST',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};
