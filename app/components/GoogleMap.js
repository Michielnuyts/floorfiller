import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default class GoogleMaps extends Component {
  static propTypes = {};
  state = {};
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 50.841707,
            longitude: 5.520720,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MapView.Marker
            coordinate={{
              latitude: 50.841707,
              longitude: 5.520720,
            }}
            image={require('../images/marker.png')}
            title="FloorFiller Festival"
            description="Kasteelstraat 6 Bilzen 3740"
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
