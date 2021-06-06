export const getRewardPoints = async (request) => {
  const response = await fetch('/rewards/points', {
    method: 'GET',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};
