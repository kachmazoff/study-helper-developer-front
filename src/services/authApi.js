import { baseApiUrl } from '../configs/apiConfig'

function registration(username, password) {
  const body = {
    username,
    password,
  }

  fetch(baseApiUrl + '/account/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  })
  .then(response => {
    console.log(response.headers)
  });

  // let result = await response.json();
  // return result;
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
    console.log(response)
    console.log(response.headers.get('Authorization'))
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

export {
  registration,
  login,
  logout,
  getToken,
  isAuthenticated,
}