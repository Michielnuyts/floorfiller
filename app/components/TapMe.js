import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class TapMe extends Component {
  state = {
    opacity: 1,
  };
  componentDidMount() {
    setTimeout(
      () => {
        this.setState({ opacity: 0 });
      },
      500
    );
  }
  render() {
    return (
      <Animatable.View
        style={[styles.container, { opacity: this.state.opacity }]}
        animation="pulse"
        iterationCount="infinite">
        <Icon
          style={{ color: '#00FFA8' }}
          name="arrow-down-bold-circle"
          size={35}
        />
        <Text style={styles.text}>Tap Me!</Text>
      </Animatable.View>
    );
  }
}

export default TapMe;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#00FFA8',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
  },
});
