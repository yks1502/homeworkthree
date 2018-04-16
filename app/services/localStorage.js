export const getAuthToken = () =>
  localStorage.getItem('auth_token');

export const setAuthToken = (token) => {
  localStorage.setItem('auth_token', token);
};

export const clearAuthToken = () => {
  localStorage.removeItem('auth_token');
};

export const getUserId = () =>
  localStorage.getItem('userId');

export const setUserId = (id) => {
  localStorage.setItem('userId', id);
};

export const clearUserId = () => {
  localStorage.removeItem('userId');
};
