import { getQuery, postQuery } from './commonApi'

const endpoint = '/articles'

function getNewArticles() {
  return getQuery(endpoint + "/new")
}

function getLastViewedArticles() {
  return getQuery(endpoint + "/lastViewed")
}

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

function getRelations(articleId) {
  return getQuery(endpoint + `/${articleId}/relations`)
}

function addRelations(articleId, dependencies) {
  return postQuery(endpoint + `/${articleId}/relations`, dependencies)
}

function getDependencies(articleId) {
  return getQuery(endpoint + `/${articleId}/dependencies`)
}

function addDependencies(articleId, dependencies) {
  return postQuery(endpoint + `/${articleId}/dependencies`, dependencies)
}

export {
  getNewArticles,
  getLastViewedArticles,
  getArticles,
  createArticle,
  getArticle,
  getArticlesByType,
  editArticle,
  getMyArticles,
  getArticleViews,
  getRelations,
  addRelations,
  getDependencies,
  addDependencies,
}