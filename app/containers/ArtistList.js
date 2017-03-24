import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getAllArtists } from '~/redux/modules/artists';
import SingleArtistPanel from '~/containers/SingleArtistPanel';

class ArtistList extends Component {
  static propTypes = {};
  state = {};
  componentDidMount() {
    this.props.dispatch(getAllArtists());
  }
  renderEachArtistPanel() {
    if (this.props.artists) {
      // Select artists from the active stage
      const artists = this.props.artists[this.props.activeStage];
      return Object.keys(artists).map((artist, i) => {
        return (
          <SingleArtistPanel
            key={i}
            artistName={artists[artist].artistName}
            startTime={artists[artist].startTime}
            endTime={artists[artist].endTime}
          />
        );
      });
    } else {
      return (
        <View>
          <Text>
            Loading ...
          </Text>
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
    activeDay: lineupMenu.activeDayTab,
    activeStage: lineupMenu.activeStageTab
  };
};

export default connect(mapStateToProps)(ArtistList);
