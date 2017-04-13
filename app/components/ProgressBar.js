import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ProgressBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: this.props.time }} />
        <View style={{ flex: 1 - this.props.time, backgroundColor: 'black' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 3,
    backgroundColor: '#00FFA8',
  },
});

export default ProgressBar;
