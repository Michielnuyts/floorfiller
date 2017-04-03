import React, { PropTypes, Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import SingleArtistPanel from '~/containers/SingleArtistPanel';
import * as Animatable from 'react-native-animatable';
import { dimensions } from '~/styles';
import { stages } from '~/config';

class FavoriteArtistList extends Component {
  renderEachArtistPanel() {
    if (this.props.artists) {
      const stagesWithArtists = this.props.artists;
      let allArtists = {};

      stages[this.props.activeDay].map(stage => {
        allArtists = { ...allArtists, ...stagesWithArtists[stage] };
      });

      return Object.keys(allArtists).map(artist => {
        const currentArtist = allArtists[artist];
        const isFavorited = this.props.favorites[currentArtist.artistName];
        if (isFavorited === true) {
          return (
            <Animatable.View
              key={`${allArtists[artist].artistName}`}
              easing="ease-out"
              animation="flipInX">
              <SingleArtistPanel
                artistName={allArtists[artist].artistName}
                startTime={allArtists[artist].startTime}
                endTime={allArtists[artist].endTime}
              />
            </Animatable.View>
          );
        }
      });
    } else {
      return (
        <View style={styles.loadingScreen}>
          <ActivityIndicator />
          <Text style={styles.loadingText}>Fetching Artists...</Text>
        </View>
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderEachArtistPanel()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ artists, lineupMenu, favorites }) => {
  return {
    artists: artists.artists,
    loadingArtists: artists.loadingArtists,
    activeDay: lineupMenu.activeDayTab,
    favorites,
  };
};

export default connect(mapStateToProps)(FavoriteArtistList);

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: dimensions.screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingScreen: {
    marginTop: 80,
  },
  loadingText: {
    marginTop: 5,
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
