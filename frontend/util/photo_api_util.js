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
    url: `api/photos/${photoId}/like`,
    data: { id: photoId }
  });
};

export const deleteLike = (photoId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/photos/${photoId}/unlike`,
    data: { id: photoId }
  });
};

export const addComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: { comment }
  });
};

export const deleteComment = (commentId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${commentId}`
  });
};
