import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FloatingMenuButton from '~/components/FloatingMenuButton';

export default class SocialMedia extends Component {
  static propTypes = {};
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <FloatingMenuButton onPress={this.props.onPress} />
          <Text>SocialMedia</Text>
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
    backgroundColor: '#000',
  },
  header: {
    flex: 2.2,
    marginTop: 10,
    alignItems: 'center',
  },
  artistList: {
    flex: 8.6,
    justifyContent: 'center',
    padding: 5,
  },
});
