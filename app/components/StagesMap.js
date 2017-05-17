import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const stageLocations = [
  { lat: 50.841707, long: 5.520720, title: 'FloorFiller Stage' },
  { lat: 50.841071, long: 5.521213, title: 'Labyrinth Stage' },
  { lat: 50.841906, long: 5.522342, title: 'AFTR Stage' },
];

const GoogleMaps = () => {
  const renderAllStages = () => {
    return stageLocations.map(stage => {
      return (
        <MapView.Marker
          key={stage.lat}
          coordinate={{ latitude: stage.lat, longitude: stage.long }}
          title={stage.title}
          image={require('../images//marker.png')}
        />
      );
    });
  };
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
        {renderAllStages()}
      </MapView>
    </View>
  );
};

export default GoogleMaps;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
