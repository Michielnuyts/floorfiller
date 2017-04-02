import React, { PropTypes } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LineUp from '~/containers/LineUp';
import Location from '~/containers/Location';
import Tickets from '~/containers/Tickets';
import Favorites from '~/containers/Favorites';
import SocialMedia from '~/containers/SocialMedia';

NavigationRouter.propTypes = {};

export default function NavigationRouter(props) {
  return (
    <Router>
      <Scene key="root" sceneStyle={styles.mainAppStyle}>
        <Scene
          key="Lineup"
          component={LineUp}
          onPress={props.openDrawer}
          initial
          hideNavBar
        />
        <Scene
          key="Tickets"
          component={Tickets}
          onPress={props.openDrawer}
          hideNavBar
        />
        <Scene
          key="Location"
          component={Location}
          onPress={props.openDrawer}
          hideNavBar
        />
        <Scene
          key="SocialMedia"
          component={SocialMedia}
          onPress={props.openDrawer}
          hideNavBar
        />
        <Scene
          key="Favorites"
          component={Favorites}
          onPress={props.openDrawer}
          hideNavBar
        />
      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  mainAppStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
