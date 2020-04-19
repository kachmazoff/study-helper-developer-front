import { getQuery, postQuery } from './commonApi'

const endpoint = '/comments'

function getComments(articleId) {
  return getQuery(`/articles/${articleId}/comments`)
}

function createComment(articleId, text) {
  return postQuery(`/articles/${articleId}/comments`, { text })
}

function replyComment(id, text) {
  return getQuery(endpoint + `/${id}`, { text })
}

export {
  getComments,
  createComment,
  replyComment,
}
