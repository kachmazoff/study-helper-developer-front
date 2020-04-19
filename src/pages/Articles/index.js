import React from 'react'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProtectedRoute from '../../HOC/ProtectedRoute';
import FullArticleView from '../../views/FullArticleView';
import ArticlesView from '../../views/ArticlesView';
import ArticleEditView from '../../views/ArticleEditView'
import ArticleCreateView from '../../views/ArticleCreateView'
import MyArticlesView from '../../views/MyArticlesView'

function Articles(props) {
  return (
    <div>
      <h1>Статьи</h1>
      <main>
        <nav className="additional">
          <Link to="/articles">Все статьи</Link>
          <Link to="/articles/my">Мои статьи</Link>
          <Link to="/articles/create">Создать</Link>
        </nav>
        <Switch>
          <ProtectedRoute path="/articles/my" component={MyArticlesView} />
          <ProtectedRoute path="/articles/create" component={ArticleCreateView} />
          <Route path="/articles/:id/edit" render={routeProps => <ArticleEditView id={routeProps.match.params.id}/> } />
          <Route path="/articles/:id" component={ FullArticleView } />
          <Route path="/articles" component={ArticlesView} />
        </Switch>
      </main>
    </div>
  )
}

export default Articles
