import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ProgressBar = ({ time }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: time }} />
      <View style={{ flex: 1 - time, backgroundColor: 'black' }} />
    </View>
  );
};

ProgressBar.propTypes = {
  time: PropTypes.number.isRequired,
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 3,
    backgroundColor: '#00FFA8',
  },
});
