import { FC } from 'react';
import { Platform, Text as RNText, StyleSheet, TextProps } from 'react-native';
import { FONT, WIDTH, fontProps } from '../../constants';

const Text: FC<TextProps> = ({ style, ...props }) => {
  return <RNText style={[styles.default, style]} {...props} />;
};

export default Text;

const styles = StyleSheet.create({
  default: {
    includeFontPadding: false,
    textAlignVertical: 'center',
    fontFamily: FONT('R'),
    fontStyle: Platform.OS === 'android' ? 'normal' : undefined,
    fontSize: 22 * WIDTH,
  },
});

type dStyleProps = {
  param1: number | string;
  param2: number | string;
  font: fontProps;
};
const dstyle = ({ param1, param2 }: dStyleProps) =>
  StyleSheet.create({
    default: {
      width: param1,
      height: param2,
    },
  });
