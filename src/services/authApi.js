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
  .then(response => {
    login(username, password)
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
    saveToken(response.headers.get('Authorization'))
    document.location.reload();

    // document.location = document.location
  });
}

function logout() {
  localStorage.removeItem('token')
  document.location.reload();
  // document.location = document.location
}

function saveToken(token) {
  localStorage.setItem('token', token)
}

function getToken() {
  return localStorage.getItem('token')
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