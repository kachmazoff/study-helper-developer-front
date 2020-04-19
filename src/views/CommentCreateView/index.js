import React from 'react'
import CommentForm from '../../forms/CommentForm'
import { createComment } from '../../services/commentsApi'

function CommentCreateView({ articleId }) {
  const [isLoading, setIsLoading] = React.useState(false)
  const onSubmit = React.useCallback((text) => {
    setIsLoading(true)
    console.log(text, articleId)
    createComment(articleId, text)
      .then(() => {
        document.location = document.location
      })
  }, [articleId])

  return (
    <div>
      {
        isLoading
          ? <p>Подождите...</p>
          : <CommentForm onSubmit={onSubmit} />
      }
    </div>
  )
}

export default CommentCreateView
