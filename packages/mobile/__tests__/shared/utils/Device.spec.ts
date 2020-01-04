import * as DeviceUtils from '@infinite/mobile/src/shared/utils/Device';

jest.mock('react-native', () => ({
  Platform: jest.requireActual('react-native').Platform,
  Dimensions: {
    get: jest.fn(() => ({
      width: 120,
      height: 140
    }))
  },
  StatusBar: {
    currentHeight: 10
  }
}));

describe('Device Utils', () => {
  describe('Get isolated dimensions', () => {
    it('Get width from device', () => {
      expect(DeviceUtils.getWidth()).toBe(120);
    });

    it('Get height from device', () => {
      expect(DeviceUtils.getHeight()).toBe(140);
    });
  });
});
