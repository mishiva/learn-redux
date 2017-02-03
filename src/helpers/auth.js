
export const getExpirationTime = () => {
  const tomorrow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
  return tomorrow.getTime();
}

export const setToken = (token) => {
  window.localStorage.setItem('token',
    JSON.stringify({'value': token, 'expire': getExpirationTime()})
  );
}

export const getToken = () => {
  return JSON.parse(window.localStorage.getItem('token'));
}

export const removeToken = () => {
  window.localStorage.removeItem('token');
}

export const getTokenValue = () => {
  const token = getToken()
  return token ? token.value : null;
}

export const isTokenValid = () => {
  const today = new Date();
  const todayTime = today.getTime();
  const token = getToken()
  if (!token) return false;
  const expireTime = getToken().expire;
  return todayTime < expireTime;
}
