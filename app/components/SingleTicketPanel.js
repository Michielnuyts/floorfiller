import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

const SingleTicketPanel = ({ onPress, delay, smallText, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Animatable.View
        delay={delay}
        animation="flipInY"
        style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        {smallText
          ? <Text style={[styles.text, styles.italic]}>{smallText}</Text>
          : null}

      </Animatable.View>
    </TouchableOpacity>
  );
};

SingleTicketPanel.propTypes = {
  text: PropTypes.string.isRequired,
  smallText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  delay: PropTypes.number.isRequired,
};

export default SingleTicketPanel;

const styles = StyleSheet.create({
  container: {
    borderColor: '#00FFA8',
    borderBottomWidth: 3,
    marginBottom: 25,
  },
  text: {
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
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
