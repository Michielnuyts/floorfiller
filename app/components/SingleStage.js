import React, { PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AnimatedIcon from '~/components/AnimatedIcon';

SingleDay.propTypes = {
  children: PropTypes.string.isRequired,
  showActiveIcon: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

SingleDay.defaultProps = {
  showActiveIcon: false
};

export default function SingleDay(props) {
  return (
    <View style={styles.container}>
      {props.showActiveIcon
        ? <AnimatedIcon name="sentiment-satisfied" />
        : null}
      <TouchableOpacity onPress={() => props.onPress(props.children)}>
        <View style={styles.tab}>
          <Text style={styles.text}>
            {props.children}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab: {
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#fff',
    padding: 4,
    marginBottom: 2
  },
  text: {
    fontSize: 14,
    color: '#fff'
  }
});
