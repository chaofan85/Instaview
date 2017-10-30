export const followUser = follow => {
  return {
    method: 'POST',
    url: 'api/follows',
    data: { follow }
  };
};

export const unFollowUser = (id) => {
  return {
    method: 'DELETE',
    url: `api/follows/${id}`,
  };
};
