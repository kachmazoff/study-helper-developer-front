import React from 'react'

import { searchArticles } from '../../services/searchApi'
import { getDependencies, addDependencies } from '../../services/articlesApi'

function ArticleDependenciesView({ articleId }) {
  const [articles, setArticles] = React.useState([])
  const [dependencies, setDependencies] = React.useState([])
  const [newDependencies, setNewDependencies] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [query, setQuery] = React.useState("")

  React.useEffect(() => {
    console.log(articleId)
    getDependencies(articleId)
      .then(setDependencies)
  }, [articleId])

  // React.useEffect(() => {
  //   let newArticles = articles.filter((article => dependencies.every(dep => dep.id !== article.id)))
  //   if (newArticles.length !== articles.length)
  //     setArticles(newArticles)
  //   newArticles = newArticles.filter((article => newDependencies.every(dep => dep.id !== article.id)))
  //   if (newArticles.length !== newDependencies.length)
  //     setArticles(newArticles)
  // }, [articles, dependencies, newDependencies])

  React.useEffect(() => {
    if (query === "") {
      setArticles([])
    }
    else {
      setIsLoading(true)
      searchArticles(query)
        .then(res => {
          console.log(res)
          setIsLoading(false)
          if (Array.isArray(res))
            setArticles(res)
        })
    }
  }, [query])

  return (
    <div>
      {
        dependencies.length > 0
        && <>
          <h3>Зависимости:</h3>
          {
            dependencies.map(dep => (
              <p>{dep.title}</p>
            ))
          }
        </>
      }
      {
        newDependencies.length > 0
        && <div>
          <h3>Новые зависимости:</h3>
          {
            newDependencies.map(dep => (
              <p>{dep.title}</p>
            ))
          }
          <button onClick={() => {
            addDependencies(articleId, newDependencies.map(dep => dep.id))
          }}>Сохранить</button>
        </div>
      }

      <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Введите запрос"/>
      {
        isLoading && <p>Загрузка...</p>
      }
      {
        !isLoading && articles.length === 0 && query !== ""
        && <p>Ничего не найдено</p>
      }
      {
        articles.length !== 0
        && articles.map(article => (
          <div>
            {article.title}
            <button onClick={() => {
              let newDeps = [...newDependencies, article]
              console.log(newDeps)
              setNewDependencies(newDeps)
            }}>
              Добавить
            </button>
          </div>
        ))
      }
    </div>
  )
}

export default ArticleDependenciesView