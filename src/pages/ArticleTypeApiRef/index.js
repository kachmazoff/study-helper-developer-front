import React from 'react'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { getArticlesTypes } from '../../services/articlesTypesApi'
import CreateArticleTypeForm from '../../forms/CreateArticleTypeForm';

function ArticleTypeRefId(props) {
  const [types, setTypes] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  const fetchTypes = React.useCallback(() => {
    setIsLoading(true)
    getArticlesTypes()
      .then(res => {
        if (Array.isArray(res)) setTypes(res)
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      <h1>Типы</h1>
      <main>
        <nav className="additional">
          <Link to="/types">Получить список</Link>
          <Link to="/types/create">Создать</Link>
        </nav>
        <Switch>
          <Route path="/types/create">
            <CreateArticleTypeForm />
          </Route>
          <Route path="/types">
            {
              !isLoading
                ? <button type="button" onClick={fetchTypes}>Запрос</button>
                : <p>Загрузка...</p>
            }
            {
              Array.isArray(types) && types.length > 0
              && (
                <ol>
                  {
                    types.map((type, index) => <li key={index}>{type.name}</li>)
                  }
                </ol>
              )
            }
            {
              !(Array.isArray(types) && types.length > 0)
              && <p>:(</p>
            }
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default ArticleTypeRefId
