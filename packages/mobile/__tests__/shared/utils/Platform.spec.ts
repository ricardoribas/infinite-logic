import { Platform } from 'react-native';
import * as PlatformUtils from '@infinite/mobile/src/shared/utils/Platform';

describe('Platform Utils', () => {
  describe('Validate platform', () => {
    it('Should return true if is on android device', () => {
      Platform.OS = 'android';

      expect(PlatformUtils.isAndroid()).toBeTruthy();
      expect(PlatformUtils.isIOS()).toBeFalsy();
    });

    it('Should return true if is on ios device', () => {
      Platform.OS = 'ios';

      expect(PlatformUtils.isAndroid()).toBeFalsy();
      expect(PlatformUtils.isIOS()).toBeTruthy();
    });
  });
});
