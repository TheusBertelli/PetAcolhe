import { Platform } from 'react-native';

export const fonteSansSerif = Platform.select({
  ios: 'System',
  android: 'sans-serif',
  web: 'sans-serif',
  default: 'sans-serif',
});
