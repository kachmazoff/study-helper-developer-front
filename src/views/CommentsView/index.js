import React from 'react'

import CommentsList from '../../components/CommentsList'

const dataCom = [
  {
    author: {
      username: 'root'
    },
    text: 'Some comment??!?!?',
  },
  {
    author: {
      username: 'root'
    },
    text: 'Some comment??!?!?',
  },
  {
    author: {
      username: 'root'
    },
    text: 'Some comment??!?!?',
  },
  {
    author: {
      username: 'root'
    },
    text: 'Some comment??!?!?',
  },
  {
    author: {
      username: 'root'
    },
    text: 'Some comment??!?!?',
  },
  {
    author: {
      username: 'root'
    },
    text: 'Some comment??!?!?',
  },
]

function CommentsView(params) {
  return (
    <div>
      <h4>Комментарии: </h4>
      <CommentsList data={dataCom} />
    </div>
  )
}

export default CommentsView
