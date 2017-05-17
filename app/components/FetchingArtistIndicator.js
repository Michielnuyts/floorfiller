import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { dimensions } from '~/styles';
import PropTypes from 'prop-types';

const FetchingArtistIndicator = ({ artistName }) => {
  return (
    <View style={styles.container}>

      <Animatable.View
        animation="pulse"
        duration={400}
        iterationCount="infinite">
        <Text style={styles.text}>
          FETCHING {artistName} FROM THE AIRPORT...
        </Text>
      </Animatable.View>

    </View>
  );
};

FetchingArtistIndicator.propTypes = {
  artistName: PropTypes.string.isRequired,
};

export default FetchingArtistIndicator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    width: dimensions.screenWidth,
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontWeight: '200',
    fontSize: 12,
  },
});
