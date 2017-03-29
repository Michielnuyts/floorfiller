import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { dimensions } from '~/styles';
import { favoriteArtist, unFavoriteArtist } from '~/redux/modules/favorites';
import { connect } from 'react-redux';

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
  render() {
    let favoriteStyle = this.props.favorites[this.props.artistName]
      ? { borderWidth: 5, borderColor: '#00FFA8' }
      : null;
    return (
      <TouchableOpacity onPress={this.handleFavorite}>
        <Image
          style={[styles.container, favoriteStyle]}
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

          <View style={styles.playInfo}>

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
      </TouchableOpacity>
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
    width: dimensions.screenWidth - 40,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#fff',
    height: 70,
    padding: 5,
    marginBottom: 5,
  },
  playInfo: {
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
});
