import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tab from '~/components/Tab';

export default class ShowStages extends Component {
  static propTypes = {};
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Tab showActiveIcon={true}>
          MATERIA
        </Tab>
        <Tab>
          MAIN
        </Tab>
        <Tab>
          CDA
        </Tab>
        <Tab>
          PIT
        </Tab>
        <Tab>
          PANORAMA
        </Tab>
        <Tab>
          CAMPING
        </Tab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
});
