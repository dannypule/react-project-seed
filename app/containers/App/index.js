/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import HomePage from 'containers/HomePage/Loadable';
import UI from 'containers/UI/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Login from 'containers/Login/Loadable';
import Registration from 'containers/Registration/Loadable';
import Layout from '../../components/Layout/Layout';

export default function App() {
  return (
    // eslint-disable-next-line
    <div> 
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/ui" component={UI} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Registration} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
      <ToastContainer autoClose={3000} hideProgressBar className="toastify" />
    </div>
  );
}
