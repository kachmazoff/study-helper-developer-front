import React from 'react'

import ArticlesList from '../../components/ArticlesList';
import ArticlePreview from '../../components/ArticlePreview';
import Card from '../../components/Card';
import MyLoader from '../../components/MyLoader';
import styles from './styles.module.css'
import { getLikedArticlesOfUser } from '../../services/likesApi'

function FavoriteArticlesView(props) {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)
      getLikedArticlesOfUser().then((res) => {
        setData(res)
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      {
        isLoading && <div className={ styles.div_modify }><MyLoader height={300} width={300}/></div>
      }
      {
        (!isLoading && Array.isArray(data) && data.length > 0)
        && <Card type="light">
            <ArticlesList data={data} component={ArticlePreview} />
        </Card>
      }
      {
        (!isLoading && Array.isArray(data) && data.length === 0)
        && <h4 className={styles.notice}>Вы ещё не лайкнули ни одну статью</h4>
      }
    </div>
  )
}

export default FavoriteArticlesView
