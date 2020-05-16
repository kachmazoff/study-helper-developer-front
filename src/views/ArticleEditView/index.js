import React, { useCallback } from 'react'
import { getArticle, editArticle } from '../../services/articlesApi'
import { getTypes } from '../../services/articlesTypesApi'
import ArticleForm from '../../forms/ArticleForm'

import ArticleDependenciesView from '../ArticleDependenciesView'

function ArticleEditView({ id }) {
  const [data, setData] = React.useState({})
  const [types, setTypes] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)

    getTypes()
    .then(res => {
      if (Array.isArray(res)) setTypes(res)
    })
    
    getArticle(id).then(res => {
      setIsLoading(false)
      setData(res)
    })
  }, [id])

  const onSubmit = useCallback((newData) => {
    setIsLoading(true)
    editArticle(id, newData)
    .then(() => {
      document.location = '/articles'
    })
  }, [id])

  return (
    <div>
      {
        isLoading && <p>Подождите...</p>
      }
      {
        (!isLoading && data && types)
        && (
        <>
          <ArticleForm types={types} data={data} onSubmit={onSubmit} actionText="Изменить"/>
          <ArticleDependenciesView articleId={id}/>
        </>
        )
      }
      {
        (!isLoading && (!data || !types))
        && <p>Что-то пошло не так :-(</p>
      }
    </div>
  )
}

export default ArticleEditView
