import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import SingleDay from '~/components/SingleDay';
const { width } = Dimensions.get('window');
import { setDayActive } from '~/redux/modules/lineupMenu';

class ShowDays extends Component {
  handleOnClick = day => {
    this.props.dispatch(setDayActive(day));
  };
  render() {
    const { activeDay } = this.props;
    return (
      <View style={styles.container}>
        <SingleDay
          onPress={this.handleOnClick}
          showActiveIcon={activeDay === 'THURSDAY' ? true : false}>
          THURSDAY
        </SingleDay>
        <SingleDay
          onPress={this.handleOnClick}
          showActiveIcon={activeDay === 'FRIDAY' ? true : false}>
          FRIDAY
        </SingleDay>
        <SingleDay
          onPress={this.handleOnClick}
          showActiveIcon={activeDay === 'SATURDAY' ? true : false}>
          SATURDAY
        </SingleDay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: width,
    marginRight: 5,
    marginleft: 5
  }
});

const mapStateToProps = ({ lineupMenu }) => {
  return {
    activeDay: lineupMenu.activeDayTab
  };
};

export default connect(mapStateToProps)(ShowDays);
