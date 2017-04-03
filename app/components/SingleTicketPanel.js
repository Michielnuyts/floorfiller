import React, { PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { dimensions } from '~/styles';

SingleTicketPanel.propTypes = {
  text: PropTypes.string.isRequired,
  smallText: PropTypes.string.isRequired,
};

export default function SingleTicketPanel(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Animatable.View
        delay={props.delay}
        animation="flipInY"
        style={styles.container}>
        <Text style={styles.text}>{props.text}</Text>
        {props.smallText
          ? <Text style={[styles.text, styles.italic]}>{props.smallText}</Text>
          : null}

      </Animatable.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#00FFA8',
    borderBottomWidth: 3,
    marginBottom: 25,
  },
  text: {
    color: '#fff',
    fontWeight: '200',
    fontSize: 18,
    textShadowColor: '#000',
    textShadowOffset: { width: 1.5, height: 1.5 },
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontSize: 10,
    fontStyle: 'italic',
  },
});
