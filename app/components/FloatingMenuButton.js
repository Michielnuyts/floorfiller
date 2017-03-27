import React, { PropTypes, Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class FloatingMenuButton extends Component {
  static propTypes = {};
  state = {};
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.text}>
          FloatingMenuButton
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 15,
    left: 2
  },
  text: {
    color: 'red'
  }
});
