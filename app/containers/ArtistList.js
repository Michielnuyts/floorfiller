import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { getAllArtists } from '~/redux/modules/artists';
import SingleArtistPanel from '~/containers/SingleArtistPanel';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import { dimensions } from '~/styles';

class ArtistList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    loadingArtists: PropTypes.bool.isRequired,
    artists: PropTypes.object.isRequired,
    activeStage: PropTypes.string.isRequired,
  };
  componentWillMount() {
    this.props.dispatch(getAllArtists());
  }
  renderEachArtistPanel() {
    if (this.props.loadingArtists === false && this.props.artists) {
      // Select artists from the active stage
      const artists = this.props.artists[this.props.activeStage];

      return Object.keys(artists).map((artist, i) => {
        return (
          <Animatable.View
            key={`${artists[artist].artistName}${i}`}
            easing="ease-out"
            animation="flipInX">
            <SingleArtistPanel
              artistName={artists[artist].artistName}
              startTime={artists[artist].startTime}
              endTime={artists[artist].endTime}
              day={artists[artist].day}
            />
          </Animatable.View>
        );
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

const mapStateToProps = ({ artists, lineupMenu }) => {
  return {
    artists: artists.artists,
    loadingArtists: artists.loadingArtists,
    activeDay: lineupMenu.activeDayTab,
    activeStage: lineupMenu.activeStageTab,
  };
};

export default connect(mapStateToProps)(ArtistList);

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
