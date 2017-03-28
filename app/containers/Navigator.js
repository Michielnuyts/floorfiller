import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LineUp from '~/containers/LineUp';
import Location from '~/containers/Location';
import Tickets from '~/containers/Tickets';
import Favorites from '~/containers/Favorites';
import SocialMedia from '~/containers/SocialMedia';
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
              key="Lineup"
              component={LineUp}
              onPress={this.openDrawer}
              initial
              hideNavBar
            />
            <Scene
              key="Tickets"
              component={Tickets}
              onPress={this.openDrawer}
              hideNavBar
            />
            <Scene
              key="Location"
              component={Location}
              onPress={this.openDrawer}
              hideNavBar
            />
            <Scene
              key="SocialMedia"
              component={SocialMedia}
              onPress={this.openDrawer}
              hideNavBar
            />
            <Scene
              key="Favorites"
              component={Favorites}
              onPress={this.openDrawer}
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
