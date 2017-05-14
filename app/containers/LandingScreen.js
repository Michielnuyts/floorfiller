import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { platform, dimensions } from '~/styles';

import Slides from '../components/Slides';

const SLIDE_DATA = [
  { id: 1, text: 'Tap The Festival Logo!', imgUrl: '../images/slide1.png' },
  {
    id: 2,
    text: 'Tap Artists to Favorite!',
    text2: 'And Receive Notifications',
    imgUrl: '../images/slide2.png',
  },
  { id: 3, text: 'Your Custom Lineup!', imgUrl: '../images/slide3.png' },
];

class LandingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Slides data={SLIDE_DATA} />
      </View>
    );
  }
}

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
