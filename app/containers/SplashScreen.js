import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FloatingMenuButton from '~/components/FloatingMenuButton';
import { platform, dimensions } from '~/styles';
import { Actions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';

export default class SplashScreen extends Component {
  handleSplashTap = () => {
    Actions.Lineup({ type: 'reset' });
  };
  render() {
    return (
      <View style={styles.container}>
        <Animatable.View animation="bounceIn" style={styles.borderView}>
          <Animatable.View animation="bounceIn" delay={2000}>
            <FloatingMenuButton onPress={this.handleSplashTap} />
          </Animatable.View>
          <Animatable.Text delay={800} animation="flipInY" style={styles.text}>
            FloorFiller Festival
          </Animatable.Text>
        </Animatable.View>
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
  borderView: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    width: dimensions.screenWidth - 40,
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
