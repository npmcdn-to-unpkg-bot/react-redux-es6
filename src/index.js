import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

const store = configureStore(window.devToolsExtension && window.devToolsExtension());
// fetch data when app loads => dispatch an action against the store
store.dispatch(loadCourses()); // loadCourses() will be invoked
store.dispatch(loadAuthors());

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, 
  document.getElementById('app')  
);