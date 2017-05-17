import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

SingleDay.propTypes = {
  children: PropTypes.string.isRequired,
  showActiveIcon: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

SingleDay.defaultProps = {
  showActiveIcon: false,
};

const SingleDay = ({ onPress, children, showActiveIcon }) => {
  let borderColor = showActiveIcon
    ? 'rgba(255, 255, 255, 1)'
    : 'rgba(255, 255, 255, 0.5)';
  let animation = showActiveIcon ? 'tada' : null;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress(children)}>
        <View style={[styles.tab, { borderColor }]}>
          <Animatable.Text animation={animation} style={styles.text}>
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
    borderBottomWidth: 3,
    borderColor: '#fff',
    padding: 4,
    marginBottom: 2,
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
});
