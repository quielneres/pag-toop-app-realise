import { Platform, StyleSheet } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

let spaceBotton = getBottomSpace();

if (getBottomSpace() > 0) {
  spaceBotton = spaceBotton - 15;
}

export default {
  padding: 15,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: getStatusBarHeight(), footerPadding: spaceBotton },
    android: { headerHeight: 44, headerPadding: 0, footerPadding: 0 },
  }),
  hairLine: StyleSheet.hairlineWidth,
};
