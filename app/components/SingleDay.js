import React, { PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Smiley from '~/components/Smiley';

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
      <TouchableOpacity onPress={() => props.onPress(props.children)}>
        <View style={styles.tab}>
          <Text style={styles.text}>
            {props.children}
          </Text>
        </View>
      </TouchableOpacity>
      {props.showActiveIcon ? <Smiley /> : null}
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
    borderBottomWidth: 1,
    borderColor: '#fff',
    padding: 4,
    marginBottom: 2
  },
  text: {
    fontSize: 14,
    color: '#fff'
  }
});
