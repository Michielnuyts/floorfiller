import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LineUp from '~/containers/LineUp';
import Drawer from 'react-native-drawer';
import Menu from '~/components/Menu';
import FloatingMenuButton from '~/components/FloatingMenuButton';

export default class Navigator extends Component {
  closeDrawer = () => {
    this._drawer.close();
  };
  openDrawer = () => {
    this._drawer.open();
  };
  render() {
    return (
      <Drawer ref={ref => this._drawer = ref} content={<Menu />}>
        <FloatingMenuButton onPress={this.openDrawer} />
        <Router>
          <Scene key="root" sceneStyle={styles.mainAppStyle}>
            <Scene key="lineup" component={LineUp} initial hideNavBar />
          </Scene>
        </Router>
      </Drawer>
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
