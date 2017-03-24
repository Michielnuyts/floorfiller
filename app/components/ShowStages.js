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
    console.log(stages);
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
    width: dimensions.screenWidth
  }
});

const mapStateToProps = ({ lineupMenu }) => {
  return {
    activeStage: lineupMenu.activeStageTab,
    activeDay: lineupMenu.activeDayTab
  };
};

export default connect(mapStateToProps)(ShowStages);
