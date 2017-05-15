import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { dimensions } from '~/styles';
import { favoriteArtist, unFavoriteArtist } from '~/redux/modules/favorites';
import { connect } from 'react-redux';
import moment from 'moment';
import DoubleClick from 'react-native-double-click';

class SingleArtistPanel extends Component {
  static propTypes = {
    artistName: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
  };
  handleFavorite = () => {
    const { artistName } = this.props;
    const isFavorited = this.props.favorites[artistName] || false;
    // artist will result in a boolean,
    // fetched by the key of the artist name
    isFavorited
      ? this.props.dispatch(unFavoriteArtist(artistName))
      : this.props.dispatch(favoriteArtist(artistName));
    // depended on the bool value, favorite or unfavorite the
    // artistpanel that has been tapped
  };
  calculateStartTime() {
    let day = 20;
    switch (this.props.day) {
      case 'THURSDAY':
        day = 20;
      case 'FRIDAY':
        day = 21;
      case 'SATURDAY':
        day = 22;
      default:
        day = 20;
    }
    const now = moment();
    const future = moment(`2017-07-${day} ${this.props.startTime}`);
    return now.to(future);
  }
  render() {
    let favoriteStyle = this.props.favorites[this.props.artistName]
      ? { borderWidth: 5, borderColor: '#00FFA8' }
      : null;
    return (
      <DoubleClick onClick={this.handleFavorite}>
        <Image
          style={[styles.container, favoriteStyle]}
          resizeMode="cover"
          source={require('../images/cashmere.png')}>

          <Animatable.View
            animation="rubberBand"
            delay={1200}
            style={styles.artistTextInfo}>
            <Text style={styles.artistTitle}>
              {this.props.artistName}
            </Text>
          </Animatable.View>

          <View style={styles.playInfo}>
            <Animatable.View
              style={styles.blackBG}
              animation="bounceIn"
              delay={500}>
              <Text style={styles.playtime}>
                {this.props.startTime} - {this.props.endTime}
              </Text>
            </Animatable.View>

            <Animatable.View
              style={styles.blackBG}
              animation="bounceIn"
              delay={500}>
              <Text style={styles.untilText}>
                Starts {this.calculateStartTime()}
              </Text>
            </Animatable.View>
          </View>
        </Image>
      </DoubleClick>
    );
  }
}

const mapStateToProps = ({ favorites }) => {
  return { favorites };
};

export default connect(mapStateToProps)(SingleArtistPanel);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: dimensions.screenWidth - 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#fff',
    marginBottom: 5,
  },
  playInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: dimensions.screenWidth,
    padding: 10,
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
    backgroundColor: '#000',
  },
});
