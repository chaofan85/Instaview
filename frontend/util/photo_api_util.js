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

export const addLike = (photoId) => {
  return $.ajax({
    method: 'POST',
    url: `api/photo/${photoId}/like`,
    data: { id: photoId }
  });
};

export const deleteLike = (photoId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/photo/${photoId}/unlike`,
    data: { id: photoId }
  });
};
