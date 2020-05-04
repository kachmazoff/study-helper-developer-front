import React from 'react'

import { getLastViewedArticles } from '../../services/articlesApi'
import ArticlesList from '../../components/ArticlesList'
import ArticlePreview from '../../components/ArticlePreview'

function LastViewedArticlesView() {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)
    getLastViewedArticles().then((res) => {
      setData(res)
      setIsLoading(false)
    })
  }, [])

  return (
    <div>
      {
        isLoading && <p>Загрузка...</p>
      }
      {
        (!isLoading && Array.isArray(data) && data.length > 0)
        && <ArticlesList data={data.slice(0, Math.min(data.length, 5))} component={ArticlePreview} />
      }
      {
        (!isLoading && Array.isArray(data) && data.length === 0)
        && <p>Вы ещё ничего не смотрели :-(</p>
      }
    </div>
  )
}

export default LastViewedArticlesView
