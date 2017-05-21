import React, { Component } from 'react';
import Navigator from '~/containers/Navigator';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import devTools from 'remote-redux-devtools';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './redux';

import { checkForFirstBoot } from './redux/modules/boot';

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunk), devTools())
);

export default class App extends Component {
  componentWillMount() {
    store.dispatch(checkForFirstBoot());
  }
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
