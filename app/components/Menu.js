import React, { PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

Menu.propTypes = {};

export default function Menu(props) {
  return (
    <Image source={require('../images/drawer.png')} style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.closeDrawer}>
        <Text style={styles.menuItem}>TIMETABLE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={props.closeDrawer}>
        <Text style={styles.menuItem}>HOW TO GET THERE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={props.closeDrawer}>
        <Text style={styles.menuItem}>TICKETS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={props.closeDrawer}>
        <Text style={styles.menuItem}>SOCIAL MEDIA</Text>
      </TouchableOpacity>
    </Image>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
    alignItems: 'center',
  },
  menuItem: {
    color: '#fff',
    padding: 10,
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginBottom: 15,
  },
});
