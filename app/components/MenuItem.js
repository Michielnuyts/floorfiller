import React, { PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
MenuItem.propTypes = {};
export default function MenuItem(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingTop: 7,
    paddingLeft: 10,
    paddingBottom: 7,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '200',
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: 50,
    justifyContent: 'center',
  },
});
