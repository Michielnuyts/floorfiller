import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import PropTypes from 'prop-types';

Tab.propTypes = {
  children: PropTypes.string.isRequired,
  showActiveIcon: PropTypes.bool.isRequired,
};

Tab.defaultProps = {
  showActiveIcon: false,
};

export default function Tab(props) {
  return (
    <View style={styles.container}>
      {props.showActiveIcon
        ? <Icon name="location" color="#fff" size={30} />
        : null}
      <View style={styles.tab}>
        <Text style={styles.text}>
          {props.children}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#fff',
    padding: 4,
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
});
