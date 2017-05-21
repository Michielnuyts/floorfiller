import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import SingleDay from '~/components/SingleDay';
import PropTypes from 'prop-types';
const { width } = Dimensions.get('window');
import { setDayActive } from '~/redux/modules/lineupMenu';

const ShowDays = ({ activeDay, dispatch }) => {
  const handleOnClick = day => {
    dispatch(setDayActive(day));
  };
  return (
    <View style={styles.container}>
      <SingleDay
        onPress={handleOnClick}
        showActiveIcon={activeDay === 'THURSDAY' ? true : false}>
        THURSDAY
      </SingleDay>
      <SingleDay
        onPress={handleOnClick}
        showActiveIcon={activeDay === 'FRIDAY' ? true : false}>
        FRIDAY
      </SingleDay>
      <SingleDay
        onPress={handleOnClick}
        showActiveIcon={activeDay === 'SATURDAY' ? true : false}>
        SATURDAY
      </SingleDay>
    </View>
  );
};

ShowDays.propTypes = {
  activeDay: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ lineupMenu }) => {
  return {
    activeDay: lineupMenu.activeDayTab,
  };
};

export default connect(mapStateToProps)(ShowDays);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: width,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});
