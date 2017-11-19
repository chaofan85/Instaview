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

export const fetchComments = (photoId) => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${photoId}`
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

export const fetchUserInfo = (username) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${username}`,
  });
};

export const fetchUserPhotos = (username) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${username}/user_photos`
  });
};

export const fetchAllFeeds = (userId) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}/feeds`
  });
};

export const fetchFeeds = (userId, start, end) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}/feeds`,
    data: {start: start, end: end}
  });
};
