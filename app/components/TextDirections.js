import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { dimensions } from '~/styles';
import { MaterialIcons } from '@expo/vector-icons';

const TextDirections = ({ showTextDirections, onPress }) => {
  const { container, textSmall } = styles;
  if (!showTextDirections) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={container}>
          <MaterialIcons name="directions" size={20} color="#fff" />
          <Text style={textSmall}>HELP ME FIND MY WAY!</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[container, { flexDirection: 'column' }]}>
        <Text style={textSmall}>Directions</Text>
        <Text style={textSmall}>Directions</Text>
        <Text style={textSmall}>Directions</Text>
        <Text style={textSmall}>Directions</Text>
        <Text style={textSmall}>Directions</Text>
      </View>
    </TouchableOpacity>
  );
};

TextDirections.propTypes = {
  showTextDirections: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default TextDirections;

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
