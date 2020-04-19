import React from 'react'

import {
  useLocation
} from "react-router-dom";

import { getArticles, getArticlesByType } from '../../services/articlesApi'
import ArticlesList from '../../components/ArticlesList';
import ArticlePreview from '../../components/ArticlePreview';

function ArticlesView(props) {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const { search } = useLocation()

  React.useEffect(() => {
    setIsLoading(true)
    const params = new URLSearchParams(search)
    const typeId = params.get('type');
    if (typeId) {
      getArticlesByType(typeId).then((res) => {
        setData(res)
        setIsLoading(false)
      })
    }
    else {
      getArticles().then((res) => {
        setData(res)
        setIsLoading(false)
      })
    }
  }, [search])

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

export default ArticlesView
