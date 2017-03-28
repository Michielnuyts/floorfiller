import React, { PropTypes, Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ShowDays from '~/components/ShowDays';
import ShowStages from '~/components/ShowStages';
import ArtistList from '~/containers/ArtistList';
import FloatingMenuButton from '~/components/FloatingMenuButton';

export default class LineUp extends Component {
  static propTypes = {};
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.showDays}>
          <FloatingMenuButton onPress={this.props.onPress} />
          <ShowDays />
        </View>
        <View style={styles.artistList}>
          <ArtistList />
        </View>
        <View style={styles.showStages}>
          <ShowStages />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
    alignItems: 'center',
    backgroundColor: '#000'
  },
  showDays: {
    flex: 2.2,
    marginTop: 10,
    alignItems: 'center'
  },
  artistList: {
    flex: 8,
    justifyContent: 'center',
    padding: 5
  },
  showStages: {
    flex: 0.6,
    justifyContent: 'flex-end',
    marginBottom: 5
  }
});
