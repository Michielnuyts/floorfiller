import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const colors = {
  backgroundPrimary: '#000',
};

const platform = Platform.OS;

const dimensions = {
  screenWidth: width,
  screenHeight: height,
  marginTop: {
    android: 0,
    ios: 0,
  },
};

export { colors, dimensions, platform };
