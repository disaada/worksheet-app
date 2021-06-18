import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Login from '@pages/Auth/Login'
import { SnackbarProvider } from 'notistack';
import PrivateRoute from '@pages/PrivateRoute'
import Worksheet from '@pages/SecurePages/Worksheet'

ReactDOM.render(
  <SnackbarProvider maxSnack={1} anchorOrigin={{
    vertical: 'top',
    horizontal: 'center',
  }}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/worksheet" component={Worksheet} />
      </Switch>
    </Router>
  </SnackbarProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
