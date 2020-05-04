import React from 'react'

import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import ArticleCreateView from '../../views/ArticleCreateView'
import MyArticlesView from '../../views/MyArticlesView'
import ArticleEditView from '../../views/ArticleEditView'

import ProtectedRoute from '../../HOC/ProtectedRoute'

import BasePage from '../../components/BasePage'
import UserCard from '../../components/UserCard'
import Section from '../../components/Section'
import styles from './styles.module.css'
import LabView from '../../views/LabView'
import CreateArticleTypeForm from '../../forms/CreateArticleTypeForm'

function Lab() {
  return (
    <BasePage title="Lab">
      <Col md={12} lg={9}>
        {/* <nav className="additional">
          <Link to="/articles">Все статьи</Link>
          <Link to="/articles/recommendations">Рекомендации</Link>
          <Link to="/articles/my">Мои статьи</Link>
          <Link to="/articles/create">Создать</Link>
        </nav> */}
        <Switch>
          <ProtectedRoute path="/lab/articles/my" component={MyArticlesView} />
          <ProtectedRoute path="/lab/articles/create" component={ArticleCreateView} />
          <ProtectedRoute path="/lab/types/create" component={CreateArticleTypeForm} />
          <Route path="/lab/articles/:id/edit" render={routeProps => <ArticleEditView id={routeProps.match.params.id} />} />
          <Route path="/lab" component={LabView} />} />
        </Switch>
      </Col>
      <Col lg={3} className="d-none d-lg-block">
        <UserCard />
      </Col>
    </BasePage>
  )
}

export default Lab
