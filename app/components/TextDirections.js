import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { dimensions } from '~/styles';
import { MaterialIcons } from '@expo/vector-icons';

const TextDirections = props => {
  if (!props.showTextDirections) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.container}>
          <MaterialIcons name="directions" size={20} color="#fff" />
          <Text style={styles.textSmall}>HELP ME FIND MY WAY!</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, { flexDirection: 'column' }]}>
        <Text style={styles.textSmall}>Directions</Text>
        <Text style={styles.textSmall}>Directions</Text>
        <Text style={styles.textSmall}>Directions</Text>
        <Text style={styles.textSmall}>Directions</Text>
        <Text style={styles.textSmall}>Directions</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: dimensions.screenWidth - 10,
    borderWidth: 3,
    borderRadius: 5,
    marginTop: 5,
    padding: 5,
    marginBottom: 5,
    borderColor: '#00FFA8',
    backgroundColor: '#000',
  },
  textSmall: {
    color: '#fff',
    fontWeight: '100',
    fontSize: 13,
  },
});

export default TextDirections;
