import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LineUp from '~/containers/LineUp';
import Location from '~/containers/Location';
import Tickets from '~/containers/Tickets';
import Favorites from '~/containers/Favorites';
import SplashScreen from '~/containers/SplashScreen';
import SocialMedia from '~/containers/SocialMedia';
import LandingScreen from '../containers/LandingScreen';
import FestivalMap from '../containers/FestivalMap';
import { platform, dimensions } from '~/styles';

export default class NavigationRouter extends Component {
  render() {
    const { initialScreen } = this.props;
    console.log(initialScreen);
    return (
      <Router>
        <Scene key="root" sceneStyle={styles.mainAppStyle}>
          <Scene
            key="Landing"
            component={LandingScreen}
            onPress={this.context.openDrawer}
            hideNavBar
            initial={initialScreen === 'LandingScreen' ? true : false}
          />
          <Scene
            key="Lineup"
            component={LineUp}
            onPress={this.context.openDrawer}
            hideNavBar
          />
          <Scene
            key="SplashScreen"
            component={SplashScreen}
            onPress={this.context.openDrawer}
            hideNavBar
            initial={initialScreen === 'SplashScreen' ? true : false}
          />
          <Scene
            key="FestivalMap"
            component={FestivalMap}
            onPress={this.context.openDrawer}
            hideNavBar
          />
          <Scene
            key="Tickets"
            component={Tickets}
            onPress={this.context.openDrawer}
            hideNavBar
          />
          <Scene
            key="Location"
            component={Location}
            onPress={this.context.openDrawer}
            hideNavBar
          />
          <Scene
            key="SocialMedia"
            component={SocialMedia}
            onPress={this.context.openDrawer}
            hideNavBar
          />
          <Scene
            key="Favorites"
            component={Favorites}
            onPress={this.context.openDrawer}
            hideNavBar
          />
        </Scene>
      </Router>
    );
  }
}
NavigationRouter.contextTypes = { openDrawer: PropTypes.func.isRequired };

const styles = StyleSheet.create({
  mainAppStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
