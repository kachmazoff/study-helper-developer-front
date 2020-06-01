import React from 'react'

import {
  Switch,
  Route,
} from "react-router-dom";
import Col from 'react-bootstrap/Col'

import ArticleCreateView from '../../views/ArticleCreateView'
import MyArticlesView from '../../views/MyArticlesView'
import ArticleEditView from '../../views/ArticleEditView'

import ProtectedRoute from '../../HOC/ProtectedRoute'

import UserCard from '../../components/UserCard'
import LabView from '../../views/LabView'
import CreateArticleTypeForm from '../../forms/CreateArticleTypeForm'
import RightColumn from '../../components/RightColumn';
import Row from 'react-bootstrap/Row';
import MainColumn from '../../components/MainColumn';

function Lab() {
  return (
    <>
      <Row className="no-gutters">
        <MainColumn>
          <Row>
            <Col>
              <h1>Личный кабинет</h1>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={12}>
              <Switch>
                <ProtectedRoute path="/lab/articles/my" component={MyArticlesView} />
                <ProtectedRoute path="/lab/articles/create" component={ArticleCreateView} />
                <ProtectedRoute path="/lab/types/create" component={CreateArticleTypeForm} />
                <Route path="/lab/articles/:id/edit" render={routeProps => <ArticleEditView id={routeProps.match.params.id} />} />
                <Route path="/lab" component={LabView} />} />
              </Switch>
            </Col>
          </Row>
        </MainColumn>
        <RightColumn>
          <UserCard />
        </RightColumn>
      </Row>
    </>
  )
}

export default Lab
