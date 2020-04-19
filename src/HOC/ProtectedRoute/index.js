import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { isAuthenticated } from '../../services/authApi'

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated() === true
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />
  )} />
);

export default ProtectedRoute
