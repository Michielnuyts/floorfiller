import React, { PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MenuItem from '~/components/MenuItem';

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
  handleSocialMedia = () => {
    Actions.SocialMedia({ type: 'reset' });
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
        onPress={this.handleLocation}
        closeDrawer={props.closeDrawer}
        buttonText="HOW TO GET THERE"
      />
      <MenuItem
        onPress={this.handleTickets}
        closeDrawer={props.closeDrawer}
        buttonText="TICKETS"
      />
      <MenuItem
        onPress={this.handleSocialMedia}
        closeDrawer={props.closeDrawer}
        buttonText="SOCIAL MEDIA"
      />
    </Image>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
    alignItems: 'stretch',
  },
});
