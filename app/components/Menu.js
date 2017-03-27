import React, { PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

Menu.propTypes = {};

export default function Menu(props) {
  return (
    <View>
      <Text>
        Menu
      </Text>
      <TouchableOpacity onPress={props.closeDrawer}>
        <Text>CLOSE ME</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
