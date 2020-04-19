import { getQuery, postQuery } from './commonApi'

const endpoint = '/comments'

function getComments(articleId) {
  return getQuery(endpoint)
}

function createComment(articleId, text) {
  return postQuery(endpoint, { text })
}

function replyComment(id, text) {
  return getQuery(endpoint + `/${id}`, { text })
}

export {
  getComments,
  createComment,
  replyComment,
}
