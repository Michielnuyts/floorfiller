import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { platform, dimensions } from '~/styles';

const Slides = ({ data }) => {
  renderSlides = () => {
    return data.map(slide => {
      return (
        <View style={styles.slide} key={slide.id}>
          <Text style={styles.text}>{slide.text}</Text>
        </View>
      );
    });
  };
  return (
    <View>
      <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
        {renderSlides()}
      </ScrollView>
    </View>
  );
};

export default Slides;

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: dimensions.screenWidth,
    flex: 1,
  },
  text: {
    marginTop: 20,
    color: '#fff',
    fontWeight: '200',
    fontSize: 30,
  },
  textSmall: {
    color: '#fff',
    fontWeight: '100',
    fontSize: 13,
  },
});
