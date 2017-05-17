import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import FloatingMenuButton from '~/components/FloatingMenuButton';
import { platform, dimensions } from '~/styles';
import GoogleMap from '~/components/GoogleMap';
import TextDirections from '~/components/TextDirections';

export default class Location extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  };
  state = {
    showTextDirections: false,
  };
  handleClick = () => {
    this.setState({ showTextDirections: !this.state.showTextDirections });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <FloatingMenuButton onPress={this.props.onPress} />
          <Text style={styles.text}>Find Our Festival</Text>
          <Text style={styles.textSmall}>Kasteelstraat 6, 3740 Bilzen</Text>
        </View>
        <TextDirections
          onPress={this.handleClick}
          showTextDirections={this.state.showTextDirections}
        />
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
    marginTop: dimensions.marginTop[platform],
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
    flex: 7.6,
    justifyContent: 'center',
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
  },
  textSmall: {
    color: '#fff',
    fontWeight: '100',
    fontSize: 13,
  },
});
