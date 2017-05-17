import React from 'react';
import { View, StyleSheet } from 'react-native';
import { platform, dimensions } from '~/styles';
import { Actions } from 'react-native-router-flux';
import { SlidesData } from '../config';

import Slides from '../components/Slides';

const LandingScreen = () => {
  const handlePress = () => {
    Actions.SplashScreen({ type: 'reset' });
  };
  return (
    <View style={styles.container}>
      <Slides data={SlidesData} onPress={handlePress} />
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: dimensions.marginTop[platform],
    alignItems: 'center',
    backgroundColor: '#000',
  },
  borderView: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    width: dimensions.screenWidth - dimensions.screenWidth / 90,
    borderWidth: 3,
    borderColor: '#00FFA8',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  text: {
    marginTop: 20,
    color: '#fff',
    fontWeight: '200',
    fontSize: 30,
  },
  textSmall: {
    color: '#fff',
    fontWeight: '100',
    fontSize: 13,
  },
});
