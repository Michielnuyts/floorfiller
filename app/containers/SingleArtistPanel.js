import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { dimensions } from '~/styles';

export default class SingleArtistPanel extends Component {
  static propTypes = {
    artistName: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
  };
  render() {
    return (
      <Image
        style={styles.container}
        resizeMode="cover"
        source={require('../images/cashmere.png')}>
        <View style={styles.artistTextInfo}>

          <Animatable.Text
            animation="rubberBand"
            delay={1200}
            style={styles.artistTitle}>
            {this.props.artistName}
          </Animatable.Text>

        </View>

        <View style={styles.infoAndImage}>

          <Animatable.View animation="bounceIn" delay={500}>
            <Text style={styles.playtime}>
              {this.props.startTime} - {this.props.endTime}
            </Text>
          </Animatable.View>

          <Animatable.View animation="bounceIn" delay={500}>
            <Text style={styles.untilText}>
              Starts in 10 minutes
            </Text>
          </Animatable.View>

        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: dimensions.screenWidth - 40,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#fff',
    height: 70,
    padding: 5,
    marginBottom: 5,
  },
  infoAndImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    width: 300,
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
  imageContainer: {
    borderTopWidth: 2,
    borderColor: '#fff',
  },
});
