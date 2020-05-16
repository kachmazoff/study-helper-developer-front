import React from 'react'

import {
  Switch,
  Route,
  Link
} from "react-router-dom"

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import FullArticleView from '../../views/FullArticleView'
import ArticlesView from '../../views/ArticlesView'
import ArticleEditView from '../../views/ArticleEditView'
import ArticleCreateView from '../../views/ArticleCreateView'
import MyArticlesView from '../../views/MyArticlesView'
import CommonRecommendationsView from '../../views/CommonRecommendationsView'

import ProtectedRoute from '../../HOC/ProtectedRoute'

import BasePage from '../../components/BasePage'
import UserCard from '../../components/UserCard'
import Card from '../../components/Card'
import Section from '../../components/Section'

import styles from './styles.module.css'

function Articles() {
  return (
    <BasePage title="Статьи">
      <Col md={12} lg={9}>
        {/* <nav className="additional">
          <Link to="/articles">Все статьи</Link>
          <Link to="/articles/recommendations">Рекомендации</Link>
          <Link to="/articles/my">Мои статьи</Link>
          <Link to="/articles/create">Создать</Link>
        </nav> */}
        <Switch>
          <ProtectedRoute path="/articles/my" component={MyArticlesView} />
          <ProtectedRoute path="/articles/create" component={ArticleCreateView} />
          <Route path="/articles/recommendations" component={CommonRecommendationsView} />
          <Route path="/articles/:id/edit" render={routeProps => <ArticleEditView id={routeProps.match.params.id} />} />
          <Route path="/articles/:id" component={FullArticleView} />
          <Route path="/articles" component={ArticlesView} />
        </Switch>
      </Col>
      <Col lg={3} className="d-none d-lg-block">
        <UserCard />
      </Col>
    </BasePage>
    // <div>
    //   <h1>Статьи</h1>
    //   <main>
    //     <nav className="additional">
    //       <Link to="/articles">Все статьи</Link>
    //       <Link to="/articles/recommendations">Рекомендации</Link>
    //       <Link to="/articles/my">Мои статьи</Link>
    //       <Link to="/articles/create">Создать</Link>
    //     </nav>
    //     <Switch>
    //       <ProtectedRoute path="/articles/my" component={MyArticlesView} />
    //       <ProtectedRoute path="/articles/create" component={ArticleCreateView} />
    //       <Route path="/articles/recommendations" component={ CommonRecommendationsView } />
    //       <Route path="/articles/:id/edit" render={routeProps => <ArticleEditView id={routeProps.match.params.id}/> } />
    //       <Route path="/articles/:id" component={ FullArticleView } />
    //       <Route path="/articles" component={ArticlesView} />
    //     </Switch>
    //   </main>
    // </div>
  )
}

export default Articles
