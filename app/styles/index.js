import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const colors = {
  backgroundPrimary: '#000'
};

const dimensions = {
  screenWidth: width,
  screenHeight: height
};

export { colors, dimensions };
