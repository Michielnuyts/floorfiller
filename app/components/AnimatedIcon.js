import React, { Component } from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

export default class AnimatedIcon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };
  state = {
    spinValue: new Animated.Value(0),
  };
  componentDidMount() {
    Animated.timing(this.state.spinValue, {
      toValue: 1,
      duration: 900,
    }).start();
  }
  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <Animated.View
        style={{
          transform: [{ rotate: spin }],
          backgroundColor: 'rgba(0,0,0,0)',
        }}>
        <Icon name={this.props.name} color="#fff" size={20} />
      </Animated.View>
    );
  }
}
