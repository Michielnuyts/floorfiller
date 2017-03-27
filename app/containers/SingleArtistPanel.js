import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class SingleArtistPanel extends Component {
  static propTypes = {
    artistName: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired
  };
  state = {};
  render() {
    return (
      <Animatable.View
        animation="pulse"
        duration={500}
        style={styles.container}>

        <View style={styles.artistTextInfo}>
          <Text style={styles.artistTitle}>
            {this.props.artistName}
          </Text>
        </View>

        <View style={styles.infoAndImage}>
          <View>
            <Text style={styles.playtime}>
              {this.props.startTime} - {this.props.endTime}
            </Text>
            <Text style={styles.untilText}>
              Starts in 10 minutes
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={require('../images/cashmere.png')}
            />
          </View>
        </View>

      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 325,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#fff',
    height: 80,
    padding: 5,
    marginBottom: 5
  },
  infoAndImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    width: 300
  },
  artistTextInfo: {
    justifyContent: 'center'
  },
  artistTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },
  playtime: {
    color: '#fff',
    fontSize: 10
  },
  untilText: {
    color: '#fff',
    fontSize: 10
  },
  image: {
    height: 40,
    width: 190
  },
  imageContainer: {
    borderTopWidth: 2,
    borderColor: '#fff'
  }
});
