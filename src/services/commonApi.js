import { baseApiUrl } from '../configs/apiConfig'
import { getToken } from './authApi'

async function postQuery(endpoint, body) {
  const headers = {
    'Content-Type': 'application/json;charset=utf-8'
  }
  const token = getToken()
  if (token) headers['Authorization'] = token

  let response = await fetch(baseApiUrl + endpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  });

  let result = await response.json();
  return result;
}

async function getQuery(endpoint) {
  const headers = {}
  const token = getToken()
  if (token) headers['Authorization'] = token

  let response = await fetch(baseApiUrl + endpoint, {
    method: 'GET',
    headers: headers
  });
  let result = await response.json();
  return result;
}

export {
    postQuery,
    getQuery,
}