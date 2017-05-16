import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Navigator from '~/containers/Navigator';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import devTools from 'remote-redux-devtools';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './redux';

import { firstBoot } from './config';

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunk), devTools())
);

export default class App extends Component {
  state = {
    initialScreen: 'SplashScreen',
  };
  async componentWillMount() {
    console.log('Mount');
    if (await firstBoot()) {
      this.setState({ initialScreen: 'LandingScreen' });
    }
  }
  render() {
    console.log('ya boy the saint');
    return (
      <Provider store={store}>
        <Navigator initialScreen={this.state.initialScreen} />
      </Provider>
    );
  }
}
