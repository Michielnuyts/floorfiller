import React, { PropTypes, Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { getAllArtists } from '~/redux/modules/artists';
import SingleArtistPanel from '~/containers/SingleArtistPanel';
import * as Animatable from 'react-native-animatable';

class ArtistList extends Component {
  static propTypes = {};
  state = {};
  componentWillMount() {
    this.props.dispatch(getAllArtists());
  }
  renderEachArtistPanel() {
    if (this.props.loadingArtists === false && this.props.artists) {
      // Select artists from the active stage
      const artists = this.props.artists[this.props.activeStage];
      console.log(artists);
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
              animationStyle={i % 2 === 0 ? 'rubberBand' : 'jello'}
            />
          </Animatable.View>
        );
      });
    } else {
      return (
        <View>
          <ActivityIndicator />
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

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: 335,
    alignItems: 'center'
  }
});

const mapStateToProps = ({ artists, lineupMenu }) => {
  return {
    artists: artists.artists,
    loadingArtists: artists.loadingArtists,
    activeDay: lineupMenu.activeDayTab,
    activeStage: lineupMenu.activeStageTab
  };
};

export default connect(mapStateToProps)(ArtistList);
