import React from 'react'

import CommentsList from '../../components/CommentsList'
import { getComments } from '../../services/commentsApi'
import Card from '../../components/Card'

function CommentsView({articleId}) {
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    getComments(articleId)
    .then(setData)
  }, [articleId])

  return (
    <>
      {
        Array.isArray(data) && data.length > 0
        && <Card>
          <h4>Комментарии: </h4>
          <CommentsList data={data} />
        </Card>
      }
    </>
  )
}

export default CommentsView
