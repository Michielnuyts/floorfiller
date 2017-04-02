import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FloatingMenuButton from '~/components/FloatingMenuButton';
import GoogleMap from '~/components/GoogleMap';
import { dimensions } from '~/styles';

export default class Location extends Component {
  static propTypes = {};
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <FloatingMenuButton onPress={this.props.onPress} />
          <Text style={styles.text}>Find Our Festival</Text>
        </View>
        <View style={styles.mapView}>
          <GoogleMap />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  header: {
    flex: 2.2,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  mapView: {
    flex: 8.6,
    justifyContent: 'center',
    padding: 5,
    width: dimensions.screenWidth - 10,
    borderWidth: 3,
    borderColor: '#00FFA8',
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: '#fff',
    fontWeight: '200',
    fontSize: 18,
    textShadowColor: '#000',
    textShadowOffset: { width: 1.5, height: 1.5 },
  },
});
