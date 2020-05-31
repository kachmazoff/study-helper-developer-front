import React from 'react';
import './App.css';
import * as Pages from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideNav from './components/SideNav';
import MobileNav from './components/MobileNav';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function App() {
  return (
    <Router>
      <Container fluid className="mx-0 px-0">
        <Row className="no-gutters">
          
            <SideNav />
            {/* <nav>
              <Link to="/">Главная</Link>
              <Link to="/articles">Статьи</Link>
              <Link to="/types">Типы</Link>
              {/* <Link to="/users">Пользователи(404)</Link> */}
            {/* <Link to="/account">Аккаунт</Link>
            </nav> */}
          
          <Col lg={11}>
            <Row className="no-gutters">

            {/* <Col lg={12}> */}
            <Col>
              <Switch>
                <Route path="/types">
                  <Pages.ArticleTypeApiRef />
                </Route>
                <Route path="/articles">
                  <Pages.Articles />
                </Route>
                <Route path="/favourites">
                  <Pages.Favourites />
                </Route>
                <Route path="/account">
                  <Pages.Account />
                </Route>
                <Route path="/lab">
                  <Pages.Lab />
                </Route>
                <Route path="/" exact>
                  <Pages.Main />
                </Route>
                <Route path="/">
                  <Pages.NotFound />
                </Route>
              </Switch>
            </Col>
            {/* <Col lg={2}>
              <UserCard />
            </Col> */}
            </Row>
          </Col>
        </Row>
        <Row className="d-block d-lg-none">
          <MobileNav />
        </Row>
      </Container>
    </Router>
  );
}

export default App;
