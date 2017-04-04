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
      1000
    );
  }
  render() {
    return (
      <Animatable.View
        style={{ opacity: this.state.opacity }}
        animation="pulse"
        iterationCount="infinite">
        <Icon
          style={{ color: '#fff' }}
          name="arrow-left-bold-circle"
          size={35}
        />
        <Text style={styles.text}>Tap Me!</Text>
      </Animatable.View>
    );
  }
}

export default TapMe;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontWeight: '200',
    marginLeft: 20,
  },
});
