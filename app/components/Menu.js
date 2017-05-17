import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MenuItem from '~/components/MenuItem';
import { dimensions, platform } from '~/styles';
import Icon from 'react-native-vector-icons/Ionicons';

Menu.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
};

const Menu = props => {
  const handleLineup = () => {
    Actions.Lineup({ type: 'reset' });
  };
  const handleFavorites = () => {
    Actions.Favorites({ type: 'reset' });
  };
  const handleLocation = () => {
    Actions.Location({ type: 'reset' });
  };
  const handleTickets = () => {
    Actions.Tickets({ type: 'reset' });
  };
  const handleFestivalMap = () => {
    Actions.FestivalMap({ type: 'reset' });
  };
  const handleFacebookIcon = () => {
    Linking.openURL('https://www.facebook.com/FloorFillerBelgium');
  };
  const handleInstagramIcon = () => {
    Linking.openURL('https://www.instagram.com/floorfillerbelgium/');
  };
  return (
    <Image source={require('../images/drawer.png')} style={styles.container}>
      <MenuItem
        onPress={handleLineup}
        closeDrawer={props.closeDrawer}
        buttonText="TIMETABLE"
      />
      <MenuItem
        onPress={handleFavorites}
        closeDrawer={props.closeDrawer}
        buttonText="MY FAVORITE ARTISTS"
      />
      <MenuItem
        onPress={handleFestivalMap}
        closeDrawer={props.closeDrawer}
        buttonText="FESTIVAL MAP"
      />
      <MenuItem
        onPress={handleLocation}
        closeDrawer={props.closeDrawer}
        buttonText="HOW TO GET THERE"
      />
      <MenuItem
        onPress={handleTickets}
        closeDrawer={props.closeDrawer}
        buttonText="TICKETS"
      />
      <View style={styles.socialMedia}>
        <TouchableOpacity onPress={handleFacebookIcon}>
          <Icon
            style={[styles.icon, { marginRight: 15 }]}
            name="logo-facebook"
            size={60}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInstagramIcon}>
          <Icon style={styles.icon} name="logo-instagram" size={60} />
        </TouchableOpacity>
      </View>
    </Image>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: dimensions.marginTop[platform],
    alignItems: 'stretch',
  },
  socialMedia: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flexDirection: 'row',
    marginTop: 20,
  },
  icon: {
    padding: 10,
    color: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
});
