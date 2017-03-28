import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LineUp from '~/containers/LineUp';
import MainAppWrapper from '~/containers/MainAppWrapper';
import Drawer from 'react-native-drawer';
import Menu from '~/components/Menu';
import { dimensions } from '~/styles';

export default class Navigator extends Component {
  closeDrawer = () => {
    this._drawer.close();
  };
  openDrawer = () => {
    this._drawer.open();
  };
  render() {
    return (
      <Drawer
        ref={ref => this._drawer = ref}
        content={<Menu closeDrawer={this.closeDrawer} />}
        openDrawerOffset={dimensions.screenWidth - 200}
        styles={drawerStyles}
        tapToClose>
        <Router>
          <Scene key="root" sceneStyle={styles.mainAppStyle}>
            <Scene
              key="lineup"
              component={LineUp}
              onPress={this.openDrawer}
              initial
              hideNavBar
            />
          </Scene>
        </Router>
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#fff', shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 0 },
};

const styles = StyleSheet.create({
  mainAppStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
