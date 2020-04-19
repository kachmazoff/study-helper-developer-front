import { getQuery, postQuery } from './commonApi'

const endpoint = '/articles/types'

function getArticlesTypes() {
  return getQuery(endpoint)
}

function createArticleType(type) {
  return postQuery(endpoint, type)
}

export {
  getArticlesTypes,
  createArticleType,
}
