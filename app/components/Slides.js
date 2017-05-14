import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { platform, dimensions } from '~/styles';

const Slides = ({ data, onPress }) => {
  renderLastSlide = index => {
    return index === data.length - 1
      ? <Button onPress={onPress} title="Yep, Got It!" />
      : null;
  };
  renderSlides = () => {
    return data.map((slide, i) => {
      return (
        <View
          style={[styles.slide, { backgroundColor: slide.backgroundColor }]}
          key={slide.id}>
          <Text style={styles.text}>{slide.text}</Text>
          <Text style={[styles.textSmall, { color: slide.color }]}>
            {slide.text2}
          </Text>
          {renderLastSlide(i)}
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
    fontSize: 35,
  },
  textSmall: {
    color: '#00FFA8',
    fontWeight: '100',
    fontSize: 20,
  },
});
