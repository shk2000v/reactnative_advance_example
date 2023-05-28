import { FC } from 'react';
import { Platform, Text as RNText, StyleSheet, TextProps } from 'react-native';
import { FONT, WIDTH, fontProps } from '../../constants';

type SizeProps = {
  size?: number;
};
type RNTextProps = TextProps & SizeProps;

const Text: FC<RNTextProps> = ({ style, size = 22, ...props }) => {
  return (
    <RNText
      style={[styles.default, dstyle({ size }).number, style]}
      {...props}
    />
  );
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
  param1?: number | string;
  param2?: number | string;
  size: number;
};
const dstyle = ({ param1, param2, size }: dStyleProps) =>
  StyleSheet.create({
    default: {
      width: param1,
      height: param2,
    },
    number: {
      fontSize: size * WIDTH,
    },
  });
