import React, { PropTypes, Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import ShowDays from '~/components/ShowDays';
import ShowStages from '~/components/ShowStages';
import FavoriteArtistList from '~/containers/FavoriteArtistList';
import FloatingMenuButton from '~/components/FloatingMenuButton';

class Favorites extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.showDays}>
          <FloatingMenuButton onPress={this.props.onPress} />
          <Text style={styles.text}>Your Custom Lineup</Text>
          <ShowDays />
        </View>
        <View style={styles.artistList}>
          <FavoriteArtistList />
        </View>
      </View>
    );
  }
}

export default connect()(Favorites);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  showDays: {
    flex: 2.5,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  artistList: {
    flex: 8,
    justifyContent: 'center',
    padding: 5,
  },
  showStages: {
    flex: 0.6,
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  text: {
    color: '#fff',
    fontWeight: '200',
    fontSize: 18,
    textShadowColor: '#000',
    textShadowOffset: { width: 1.5, height: 1.5 },
  },
});
