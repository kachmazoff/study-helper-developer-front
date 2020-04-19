import { getQuery, postQuery } from './commonApi'

const endpoint = '/articles/types'

function getTypes() {
  return getQuery(endpoint)
}

function getType(id) {
  return getQuery(endpoint + `/${id}`)
}

function createType(type) {
  return postQuery(endpoint, type)
}

function editType(type) {
  return postQuery(endpoint + `/${ type.id }`, type)
}

export {
  getTypes,
  getType,
  createType,
  editType,
}
