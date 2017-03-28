import React, { PropTypes, Component } from 'react';
import { View } from 'react-native';

export default class MainAppWrapper extends Component {
  static propTypes = {};
  state = {};
  render() {
    return (
      <View>
        {this.props.children}
      </View>
    );
  }
}
