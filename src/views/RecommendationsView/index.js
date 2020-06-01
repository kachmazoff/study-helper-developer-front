import React from 'react'

import ArticlesList from '../../components/ArticlesList'
import ArticlePreview from '../../components/ArticlePreview'
import { getRecommendationsForArticle } from '../../services/recommendationApi'
import Card from '../../components/Card'

import styles from './styles.module.css'
import MyLoader from '../../components/MyLoader'

function RecommendationsView({ articleId }) {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)
    getRecommendationsForArticle(articleId)
      .then((res) => {
        setIsLoading(false)
        if (Array.isArray(res)) {
          setData(res)
        }
      })
  }, [articleId])

  return (
    <>
      {/* <div> */}
      {
        isLoading && <MyLoader />
      }
      {
        (!isLoading && Array.isArray(data) && data.length > 0)
        && <Card type="light">
          <h4 className={styles.title} >Советуем просмотреть: </h4>
          <ArticlesList data={data} component={ArticlePreview} />
        </Card>
      }
      {/* </div> */}
    </>
  )
}

export default RecommendationsView
