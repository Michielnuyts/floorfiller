import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LineUp from '~/containers/LineUp';

export default class Navigator extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" sceneStyle={styles.mainAppStyle}>
          <Scene key="lineup" component={LineUp} initial hideNavBar />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  mainAppStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  }
});
