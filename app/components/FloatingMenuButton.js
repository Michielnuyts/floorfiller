import React, { PropTypes, Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class FloatingMenuButton extends Component {
  static propTypes = {};
  state = {};
  render() {
    return (
      <View style={styles.button}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text>
            FloatingMenuButton
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 15
  }
});
