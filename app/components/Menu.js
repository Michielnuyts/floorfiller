import React, { PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import MenuItem from '~/components/MenuItem';

Menu.propTypes = {};

export default function Menu(props) {
  return (
    <Image source={require('../images/drawer.png')} style={styles.container}>

      <MenuItem buttonText="TIMETABLE" />
      <MenuItem buttonText="HOW TO GET THERE" />
      <MenuItem buttonText="TICKETS" />
      <MenuItem buttonText="SOCIAL MEDIA" />

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
