import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SingleArtistPanel from '~/containers/SingleArtistPanel';

export default class ArtistList extends Component {
  static propTypes = {};
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <SingleArtistPanel
            artistName="CASHMERE"
            playTime="14.00 - 15.00"
            startTime="Starts in 15 minutes"
          />
          <SingleArtistPanel
            artistName="JORIS VOORN"
            playTime="16.00 - 17.00"
            startTime="Starts in 2 hours"
          />
          <SingleArtistPanel
            artistName="wAFF"
            playTime="17.00 - 18.30"
            startTime="Starts in 4 hours"
          />
          <SingleArtistPanel
            artistName="AMELIE LENS"
            playTime="18.30 - 20.00"
            startTime="Starts in 8 hours"
          />
          <SingleArtistPanel
            artistName="REELOW"
            playTime="20.00 - 00.00"
            startTime="Starts tomorrow"
          />
          <SingleArtistPanel
            artistName="MASSIMO CONECTO &amp; MISS SHENE"
            playTime="20.00 - 00.00"
            startTime="Starts tomorrow"
          />
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
