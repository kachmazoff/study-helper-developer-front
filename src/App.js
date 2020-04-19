import React from 'react';
import './App.css';
import * as Pages from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">API</Link>
          <Link to="/articles">Статьи</Link>
          <Link to="/types">Типы</Link>
          {/* <Link to="/users">Пользователи(404)</Link> */}
          <Link to="/account">Аккаунт</Link>
        </nav>

        <Switch>
          <Route path="/types">
            <Pages.ArticleTypeApiRef />
          </Route>
          <Route path="/articles">
            <Pages.Articles />
          </Route>
          <Route path="/account">
            <Pages.Account />
          </Route>
          <Route path="/" exact>
            <Pages.Main />
          </Route>
          <Route path="/">
            <Pages.NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
