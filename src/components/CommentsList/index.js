import React from 'react'
import Comment from '../Comment'

function CommentsList({ data }) {
  return (
    <ul>
      {
        data.map(comment => (
          <li key={comment.id}><Comment data={comment}/></li>
        ))
      }
    </ul>
  )
}

export default CommentsList
