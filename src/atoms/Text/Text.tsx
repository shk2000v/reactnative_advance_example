import { FC } from 'react';
import { Platform, Text as RNText, StyleSheet, TextProps } from 'react-native';
import { FONT } from '../../constants';

const Text: FC<TextProps> = ({ style, ...props }) => {
  return <RNText style={[styles.default, style]} {...props} />;
};

export default Text;

const styles = StyleSheet.create({
  default: {
    // fontFamily: FONT('R'),
    includeFontPadding: false,
    textAlignVertical: 'center',
    fontFamily: FONT('R'),
    fontStyle: Platform.OS === 'android' ? 'normal' : undefined,
    fontSize: 22,
  },
});

type dStyleProps = {
  param1: number | string;
  param2: number | string;
};
const dstyle = ({ param1, param2 }: dStyleProps) =>
  StyleSheet.create({
    default: {
      width: param1,
      height: param2,
    },
  });