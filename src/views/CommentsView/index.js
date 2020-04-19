import React from 'react'

import CommentsList from '../../components/CommentsList'
import { getComments } from '../../services/commentsApi'

function CommentsView({articleId}) {
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    getComments(articleId)
    .then(setData)
  }, [articleId])

  return (
    <div>
      {
        Array.isArray(data) && data.length > 0
        && <>
          <h4>Комментарии: </h4>
          <CommentsList data={data} />
        </>
      }
    </div>
  )
}

export default CommentsView
