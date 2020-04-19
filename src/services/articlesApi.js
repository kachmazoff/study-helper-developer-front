import { getQuery, postQuery } from './commonApi'

const endpoint = '/articles'

function getArticles() {
  return getQuery(endpoint)
}

function createArticle(body) {
  return postQuery(endpoint, body)
}

function getArticle(id) {
  return getQuery(endpoint + `/${id}`)
}

function getArticlesByType(typeId) {
  return getQuery(endpoint + `?type=${typeId}`)
}

function editArticle(articleId, article) {
  return postQuery(endpoint + `/${articleId}`, article)
}

function getMyArticles() {
  return getQuery(endpoint + '/my')
}

function getArticleViews(id) {
  return getQuery(endpoint + `/${id}/stat`)
}

export {
  getArticles,
  createArticle,
  getArticle,
  getArticlesByType,
  editArticle,
  getMyArticles,
  getArticleViews,
}