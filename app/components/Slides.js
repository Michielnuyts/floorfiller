import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Button from 'react-native-button';
import PropTypes from 'prop-types';
import { dimensions } from '~/styles';

const Slides = ({ data, onPress }) => {
  const renderLastSlide = index => {
    return index === data.length - 1
      ? <Button
          containerStyle={styles.containerStyle}
          style={styles.button}
          onPress={onPress}>
          Yep, Got It!
        </Button>
      : null;
  };
  const renderSlides = () => {
    const slideImages = {
      0: require('../images/Slide1.png'),
      1: require('../images/Slide2.png'),
      2: require('../images/Slide2.png'),
    };
    return data.map((slide, i) => {
      return (
        <View
          style={[styles.slide, { backgroundColor: slide.backgroundColor }]}
          key={slide.id}>
          <Text style={styles.text}>{slide.text}</Text>

          <Image
            style={styles.image}
            resizeMode="cover"
            source={slideImages[i]}
          />

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

Slides.propTypes = {
  data: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Slides;

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: dimensions.screenWidth,
    flex: 1,
  },
  image: {
    width: dimensions.screenWidth - 20,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 5,
    marginTop: 5,
    padding: 5,
  },
  button: {
    fontSize: 20,
    fontWeight: '300',
    color: '#fff',
  },
  containerStyle: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#00FFA8',
    marginTop: 10,
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
