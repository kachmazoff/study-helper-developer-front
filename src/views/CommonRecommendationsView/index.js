import React from 'react'

import { getCommonRecommendations } from '../../services/recommendationApi'
import ArticlesList from '../../components/ArticlesList';
import ArticlePreview from '../../components/ArticlePreview';

function CommonRecommendationsView() {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)
    getCommonRecommendations()
    .then((res) => {
      setIsLoading(false)
      if (Array.isArray(res)) {
        setData(res)
      }
    })
  }, [])

  return (
    <div>
      {
        isLoading && <p>Загрузка...</p>
      }
      {
        (!isLoading && Array.isArray(data) && data.length > 0)
        && <ArticlesList data={data} component={ArticlePreview} />
      }
      {  
        (!isLoading && Array.isArray(data) && data.length === 0)
        && <p>Ничего не найдено :-(</p>
      }
    </div>
  )
}

export default CommonRecommendationsView
