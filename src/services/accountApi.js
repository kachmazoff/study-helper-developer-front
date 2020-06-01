import { getQuery } from './commonApi'
import { getToken } from './authApi'

const endpoint = '/account'

async function getAccountInfo() {
  const token = getToken()
  if (!token) return null
  return getQuery(endpoint)
}

export {
  getAccountInfo
}
