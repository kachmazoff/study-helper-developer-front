import React from 'react'

import CommentsList from '../../components/CommentsList'
import { getComments } from '../../services/commentsApi'
import Section from '../../components/Section'


function CommentsView({ articleId }) {
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    getComments(articleId)
      .then(setData)
  }, [articleId])

  return (
    <>
      {
        Array.isArray(data) && data.length > 0
        && (
          <Section title="Комментарии:" type="light">
            <CommentsList data={data} />
          </Section>
        )
      }
    </>
  )
}

export default CommentsView
