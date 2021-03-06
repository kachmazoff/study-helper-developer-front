import React, { useCallback } from 'react'
import { createArticle } from '../../services/articlesApi'
import { getTypes } from '../../services/articlesTypesApi'
import ArticleForm from '../../forms/ArticleForm'
import MyLoader from '../../components/MyLoader';

function ArticleCreateView(props) {
  const [data, setData] = React.useState({})
  const [types, setTypes] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)

    getTypes()
    .then(res => {
      if (Array.isArray(res)) setTypes(res)
      setIsLoading(false)
    })
  }, [])

  const onSubmit = useCallback((newData) => {
    createArticle(newData)
    .then(() => {
      document.location = '/articles'
    })
  }, [])

  return (
    <div>
      {
        isLoading && <MyLoader />
      }
      {
        (!isLoading && data && types)
        && <ArticleForm types={types} data={data} onSubmit={onSubmit} actionText="Создать"/>
      }
      {
        (!isLoading && (!data || !types))
        && <p>Что-то пошло не так :-(</p>
      }
    </div>
  )
}

export default ArticleCreateView
