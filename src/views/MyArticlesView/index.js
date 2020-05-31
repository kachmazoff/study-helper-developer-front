import React from 'react'

import { getMyArticles } from '../../services/articlesApi'
import ArticlesList from '../../components/ArticlesList'
import ArticlePreview from '../../components/ArticlePreview'
import ArticleWithStat from '../../components/ArticleWithStat'
import MyLoader from '../../components/MyLoader'

function MyArticlesView(props) {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)
    getMyArticles().then((res) => {
      setData(res)
      setIsLoading(false)
    })

  }, [])

  return (
    <div>
      {
        isLoading && <MyLoader />
      }
      {
        (!isLoading && Array.isArray(data) && data.length > 0)
        && <ArticlesList data={data} component={ArticleWithStat} />
      }
      {
        (!isLoading && Array.isArray(data) && data.length === 0)
        && <p>Ничего не найдено :-(</p>
      }
    </div>
  )
}

export default MyArticlesView
