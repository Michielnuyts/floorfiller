import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

MenuItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

const MenuItem = ({ buttonText, onPress, closeDrawer }) => {
  const handleButtonPress = () => {
    onPress();
    closeDrawer();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleButtonPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

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
