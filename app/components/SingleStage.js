import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

SingleDay.propTypes = {
  children: PropTypes.string.isRequired,
  showActiveIcon: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

const SingleDay = ({ showActiveIcon, children, onPress }) => {
  let borderColor = showActiveIcon
    ? 'rgba(255, 255, 255, 1)'
    : 'rgba(255, 255, 255, 0.5)';
  let animation = showActiveIcon ? 'pulse' : null;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress(children)}>
        <View style={[styles.tab, { borderColor }]}>
          <Animatable.Text
            animation={animation}
            iterationCount="infinite"
            style={styles.text}>
            {children}
          </Animatable.Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SingleDay;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    alignItems: 'center',
    borderTopWidth: 3,
    borderColor: '#000',
    padding: 4,
    paddingLeft: 7,
    paddingRight: 7,
    marginBottom: 0,
  },
  tabActive: {
    borderColor: 'rgba(0, 0, 0, 1)',
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
});
