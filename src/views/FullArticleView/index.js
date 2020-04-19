import React from 'react'

import { getArticle } from '../../services/articlesApi'
import ArticleFull from '../../components/ArticleFull'
import CommentsView from '../../views/CommentsView'
import { isAuthenticated } from '../../services/authApi'
import CommentCreateView from '../CommentCreateView'

function FullArticleView(props) {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    getArticle(props.match.params.id)
      .then((d) => {
        setData(d)
      })
  }, [props.match.params.id])

  return (
    <div>
      {
        !data
          ? <p>Загрузка...</p>
          : (
            <>
              <ArticleFull data={data} />
              <hr />
              <CommentsView />
              {
                isAuthenticated()
                && <CommentCreateView id={data.id} />
              }
            </>
          )
      }
    </div>
  )
}

export default FullArticleView
