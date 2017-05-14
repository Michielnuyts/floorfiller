import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
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

export default function Menu(props) {
  handleLineup = () => {
    Actions.Lineup({ type: 'reset' });
  };
  handleFavorites = () => {
    Actions.Favorites({ type: 'reset' });
  };
  handleLocation = () => {
    Actions.Location({ type: 'reset' });
  };
  handleTickets = () => {
    Actions.Tickets({ type: 'reset' });
  };
  handleFestivalMap = () => {
    Actions.FestivalMap({ type: 'reset' });
  };
  handleSocialMedia = () => {
    Actions.SocialMedia({ type: 'reset' });
  };
  handleFacebookIcon = () => {
    Linking.openURL('https://www.facebook.com/FloorFillerBelgium');
  };
  handleInstagramIcon = () => {
    Linking.openURL('https://www.instagram.com/floorfillerbelgium/');
  };
  return (
    <Image source={require('../images/drawer.png')} style={styles.container}>
      <MenuItem
        onPress={this.handleLineup}
        closeDrawer={props.closeDrawer}
        buttonText="TIMETABLE"
      />
      <MenuItem
        onPress={this.handleFavorites}
        closeDrawer={props.closeDrawer}
        buttonText="MY FAVORITE ARTISTS"
      />
      <MenuItem
        onPress={this.handleFestivalMap}
        closeDrawer={props.closeDrawer}
        buttonText="FESTIVAL MAP"
      />
      <MenuItem
        onPress={this.handleLocation}
        closeDrawer={props.closeDrawer}
        buttonText="HOW TO GET THERE"
      />
      <MenuItem
        onPress={this.handleTickets}
        closeDrawer={props.closeDrawer}
        buttonText="TICKETS"
      />
      <View style={styles.socialMedia}>
        <TouchableOpacity onPress={this.handleFacebookIcon}>
          <Icon
            style={[styles.icon, { marginRight: 15 }]}
            name="logo-facebook"
            size={60}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleInstagramIcon}>
          <Icon style={styles.icon} name="logo-instagram" size={60} />
        </TouchableOpacity>
      </View>
    </Image>
  );
}

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
