import React from 'react'
import CommentForm from '../../forms/CommentForm'
import { createComment } from '../../services/commentsApi'
import Card from '../../components/Card'

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
    <Card>
      {
        isLoading
          ? <p>Подождите...</p>
          : <CommentForm onSubmit={onSubmit} />
      }
    </Card>
  )
}

export default CommentCreateView
