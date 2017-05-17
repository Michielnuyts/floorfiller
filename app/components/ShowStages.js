import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SingleStage from '~/components/SingleStage';
import { setStageActive } from '~/redux/modules/lineupMenu';
import { stages } from '~/config';
import { dimensions } from '~/styles';

const ShowStages = ({ activeStage, activeDay }) => {
  const handleOnClick = stage => {
    this.props.dispatch(setStageActive(stage));
  };
  const renderEachRow = () => {
    // Render all stages on the menu depended on the selected day
    // The key for the different stages arrays is the name of the day
    // stages['FRIDAY'] | stages is an obj with 3 arrays
    return stages[activeDay].map(stage => {
      return (
        <SingleStage
          key={stage}
          onPress={handleOnClick}
          showActiveIcon={activeStage === stage ? true : false}>
          {stage}
        </SingleStage>
      );
    });
  };
  return (
    <View style={styles.container}>
      {renderEachRow()}
    </View>
  );
};

ShowStages.propTypes = {
  activeStage: PropTypes.string.isRequired,
  activeDay: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ lineupMenu }) => {
  return {
    activeStage: lineupMenu.activeStageTab,
    activeDay: lineupMenu.activeDayTab,
  };
};

export default connect(mapStateToProps)(ShowStages);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: dimensions.screenWidth - 20,
    marginRight: 10,
    marginLeft: 10,
  },
});
