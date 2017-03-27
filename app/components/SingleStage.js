import React, { PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

SingleDay.propTypes = {
  children: PropTypes.string.isRequired,
  showActiveIcon: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default function SingleDay(props) {
  let borderColor = props.showActiveIcon
    ? 'rgba(255, 255, 255, 1)'
    : 'rgba(255, 255, 255, 0.7)';
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.onPress(props.children)}>
        <View style={[styles.tab, { borderColor }]}>
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
    borderTopWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    padding: 4,
    marginBottom: 0
  },
  tabActive: {
    borderColor: 'rgba(255, 255, 255, 1)'
  },
  text: {
    fontSize: 14,
    color: '#fff',
    textShadowColor: 'rgba(255, 255, 255, 0.65)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 0.8
  }
});
