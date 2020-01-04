import { Dimensions } from 'react-native';

export function getWidth(): number {
  return Dimensions.get('window').width;
}

export function getHeight(): number {
  return Dimensions.get('window').height;
}

export default {
  getWidth,
  getHeight
};
