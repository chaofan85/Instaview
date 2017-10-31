export const followUser = follow => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: { follow }
  });
};

export const unFollowUser = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`,
  });
};
