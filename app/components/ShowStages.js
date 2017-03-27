import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SingleStage from '~/components/SingleStage';
import { setStageActive } from '~/redux/modules/lineupMenu';
import { stages } from '~/config';
import { dimensions } from '~/styles';

class ShowStages extends Component {
  handleOnClick = stage => {
    this.props.dispatch(setStageActive(stage));
  };
  renderEachRow() {
    // Render all stages on the menu depended on the selected day
    // The key for the different stages arrays is the name of the day
    // stages['FRIDAY'] | stages is an obj with 3 arrays
    const { activeStage, activeDay } = this.props;
    return stages[activeDay].map(stage => {
      return (
        <SingleStage
          key={stage}
          onPress={this.handleOnClick}
          showActiveIcon={activeStage === stage ? true : false}>
          {stage}
        </SingleStage>
      );
    });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderEachRow()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: dimensions.screenWidth - 20,
    marginRight: 10,
    marginLeft: 10
  }
});

const mapStateToProps = ({ lineupMenu }) => {
  return {
    activeStage: lineupMenu.activeStageTab,
    activeDay: lineupMenu.activeDayTab
  };
};

export default connect(mapStateToProps)(ShowStages);
