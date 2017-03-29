import React, { PropTypes, Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class FloatingMenuButton extends Component {
  static propTypes = {};
  state = {};
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Animatable.Image
          animation="pulse"
          duration={2500}
          iterationCount="infinite"
          style={{ width: 80, height: 80 }}
          source={require('../images/logo.png')}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});
