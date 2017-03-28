import React, { PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

SingleDay.propTypes = {
  children: PropTypes.string.isRequired,
  showActiveIcon: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

SingleDay.defaultProps = {
  showActiveIcon: false
};

export default function SingleDay(props) {
  let borderColor = props.showActiveIcon
    ? 'rgba(255, 255, 255, 1)'
    : 'rgba(255, 255, 255, 0.5)';
  let animation = props.showActiveIcon ? 'tada' : null;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.onPress(props.children)}>
        <View style={[styles.tab, { borderColor }]}>
          <Animatable.Text animation={animation} style={styles.text}>
            {props.children}
          </Animatable.Text>
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
    borderBottomWidth: 3,
    borderColor: '#fff',
    padding: 4,
    marginBottom: 2
  },
  text: {
    fontSize: 14,
    color: '#fff'
  }
});
