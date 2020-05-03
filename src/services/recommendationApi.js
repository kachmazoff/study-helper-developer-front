import { getQuery } from './commonApi'

function getRecommendationsForArticle(articleId) {
  return getQuery(`/articles/${articleId}/recommendations`)
}

function getCommonRecommendations() {
  return getQuery('/articles/recommendations')
}

export {
  getRecommendationsForArticle,
  getCommonRecommendations,
}
