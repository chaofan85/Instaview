export const createPhoto = (id, formData) => {
  return $.ajax({
    url: `/api/users/${id}`,
    type: 'PATCH',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};

export const followUser = (followeeId) => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: `api/users/${followeeId}/follow`,
    data: { id: followeeId }
  });
};

export const unFollowUser = (followeeId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/users/${followeeId}/unfollow`,
    data: { id: followeeId }
  });
};

// export const fetchFollowees = (userId) => {
//   return $.ajax({
//
//   })
// }
