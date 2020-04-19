import React from 'react'

import { getArticle, getArticleViews } from '../../services/articlesApi'
import ArticleFull from '../../components/ArticleFull'
import CommentsView from '../../views/CommentsView'
import { isAuthenticated } from '../../services/authApi'
import CommentCreateView from '../CommentCreateView'

function FullArticleView(props) {
  const [data, setData] = React.useState(null)
  const [views, setViews] = React.useState(null)

  React.useEffect(() => {
    getArticle(props.match.params.id)
      .then((d) => {
        setData(d)
        getArticleViews(props.match.params.id).then(setViews)
      })
  }, [props.match.params.id])

  return (
    <div>
      {
        !data
          ? <p>Загрузка...</p>
          : (
            <>
              <ArticleFull data={data} views={views}/>
              <hr />
              <CommentsView articleId={data.id} />
              {
                isAuthenticated()
                && <>
                <br></br>
                <CommentCreateView articleId={data.id} />
                </>
              }
            </>
          )
      }
    </div>
  )
}

export default FullArticleView
