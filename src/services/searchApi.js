import { getQuery } from './commonApi'

function searchArticles(q) {
  return getQuery(`/articles/search?query=${q}`)
}

export {
    searchArticles,
}