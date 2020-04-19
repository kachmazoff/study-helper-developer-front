import { baseApiUrl } from '../configs/apiConfig'

function registration(username, password) {
  const body = {
    username,
    password,
  }

  return fetch(baseApiUrl + '/account/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  })
}

function login(username, password) {
  const body = {
    username,
    password,
  }

  return fetch(baseApiUrl + '/auth', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Headers': 'Authorization',
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  })
  .then(response => {
    document.cookie = `token=${response.headers.get('Authorization')}`
    document.location = document.location
  });
}

function logout() {
  document.cookie = "token=; expires = Thu, 01 Jan 1970 00:00:00 GMT"
  document.location = document.location
}

function getToken() {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + 'token'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function isAuthenticated() {
  return !!getToken()
}

function getUsername() {
  return isAuthenticated() && JSON.parse(atob(getToken().split('.')[1])).sub;
}

export {
  registration,
  login,
  logout,
  getToken,
  isAuthenticated,
  getUsername,
}