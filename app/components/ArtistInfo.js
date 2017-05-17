import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

import { dimensions } from '~/styles';
import { calculateStartTime } from '../config';

const ArtistInfo = ({ day, startTime, endTime, artistName }) => {
  return (
    <View style={styles.container}>

      <View style={styles.playInfo}>
        <Animatable.View
          style={styles.blackBG}
          animation="bounceIn"
          delay={500}>
          <Text style={styles.playtime}>
            {startTime} - {endTime}
          </Text>
        </Animatable.View>
        <Animatable.View
          style={styles.blackBG}
          animation="bounceIn"
          delay={500}>
          <Text style={styles.untilText}>
            {calculateStartTime(day, startTime)}
          </Text>
        </Animatable.View>
      </View>

      <Animatable.View
        animation="bounceIn"
        delay={1500}
        style={styles.artistTextInfo}>
        <Text style={styles.artistTitle}>
          {artistName}
        </Text>
      </Animatable.View>

    </View>
  );
};

ArtistInfo.propTypes = {
  day: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};

export default ArtistInfo;

const styles = StyleSheet.create({
  container: {
    height: 75,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: dimensions.screenWidth,
  },
  playInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: dimensions.screenWidth,
  },
  artistTextInfo: {
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  artistTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textShadowColor: '#000',
    textShadowOffset: { width: 1.5, height: 1.5 },
  },
  playtime: {
    color: '#fff',
    fontSize: 12,
  },
  untilText: {
    color: '#fff',
    fontSize: 12,
  },
  blackBG: {
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
