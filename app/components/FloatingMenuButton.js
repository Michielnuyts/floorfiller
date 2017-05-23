import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

export default class FloatingMenuButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  };
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Animatable.Image
            animation="pulse"
            duration={500}
            iterationCount="infinite"
            style={{ width: 60, height: 60 }}
            source={require('../images/logo.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
