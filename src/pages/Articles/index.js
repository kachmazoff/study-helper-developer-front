import React from 'react'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { getArticles } from '../../services/articlesApi'
import CreateArticleForm from '../../forms/CreateArticleForm'
import ProtectedRoute from '../../HOC/ProtectedRoute';

function Articles(props) {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  const fetchData = React.useCallback(() => {
    setIsLoading(true)
    getArticles()
      .then(res => {
        if (Array.isArray(res)) setData(res)
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      <h1>Статьи</h1>
      <main>
        <nav className="additional">
          <Link to="/articles">Получить список</Link>
          <Link to="/articles/create">Создать</Link>
        </nav>
        <Switch>
          <ProtectedRoute component={CreateArticleForm} path="/articles/create" />
          {/* <Route path="/articles/create">
            <CreateArticleForm />
          </Route> */}
          <Route path="/articles">
            {
              !isLoading
                ? <button type="button" onClick={fetchData}>Запрос</button>
                : <p>Загрузка...</p>
            }
            {
              data.length > 0
              && (
                <ol>
                  {
                    data.map((article, index) => <li key={index}>{article.title}</li>)
                  }
                </ol>
              )
            }
            {
              !(Array.isArray(data) && data.length > 0)
              && <p>:(</p>
            }
          </Route>
        </Switch>

      </main>
    </div>
  )
}

export default Articles
