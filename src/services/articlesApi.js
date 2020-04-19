import { getQuery, postQuery } from './commonApi'

const endpoint = '/articles'

function getArticles() {
  return getQuery(endpoint)
}

function createArticle(body) {
  return postQuery(endpoint, body)
}

export {
  getArticles,
  createArticle,
}
