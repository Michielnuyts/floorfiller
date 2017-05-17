import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import FloatingMenuButton from '~/components/FloatingMenuButton';
import { platform, dimensions } from '~/styles';

import StagesMap from '~/components/StagesMap';

const FestivalMap = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FloatingMenuButton onPress={onPress} />
        <Text style={styles.text}>Festival Stages</Text>
      </View>
      <View style={styles.mapView}>
        <StagesMap />
      </View>
    </View>
  );
};

FestivalMap.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default FestivalMap;

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
    flex: 10,
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
