import React from 'react'

import {
  Switch,
  Route,
} from "react-router-dom"

import Col from 'react-bootstrap/Col'

import FullArticleView from '../../views/FullArticleView'
import ArticlesView from '../../views/ArticlesView'
import ArticleEditView from '../../views/ArticleEditView'
import ArticleCreateView from '../../views/ArticleCreateView'
import MyArticlesView from '../../views/MyArticlesView'
import CommonRecommendationsView from '../../views/CommonRecommendationsView'

import ProtectedRoute from '../../HOC/ProtectedRoute'

import UserCard from '../../components/UserCard'

import MainColumn from '../../components/MainColumn'
import RightColumn from '../../components/RightColumn'
import Row from 'react-bootstrap/Row'
import AdvertisingCard from '../../components/AdvertisingCard'

function Articles() {
  return (
    <>
      <Row className="no-gutters">
        <MainColumn>
          <Row>
            <Col>
              <h1>Статьи</h1>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={12} className="px-0 px-md-3">
              <Switch>
                <ProtectedRoute path="/articles/my" component={MyArticlesView} />
                <ProtectedRoute path="/articles/create" component={ArticleCreateView} />
                <Route path="/articles/recommendations" component={CommonRecommendationsView} />
                <Route path="/articles/:id/edit" render={routeProps => <ArticleEditView id={routeProps.match.params.id} />} />
                <Route path="/articles/:id" component={FullArticleView} />
                <Route path="/articles" component={ArticlesView} />
              </Switch>
            </Col>
          </Row>
        </MainColumn>
        <RightColumn>
          <UserCard />
          <AdvertisingCard />
        </RightColumn>
      </Row>
    </>
  )
}

export default Articles
