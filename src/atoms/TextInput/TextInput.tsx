import { forwardRef, memo } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
  useWindowDimensions,
} from 'react-native';

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ style, ...props }, ref) => {
    const changedStyle = StyleSheet.flatten(style);
    const { fontScale } = useWindowDimensions();
    return (
      <RNTextInput
        style={[
          styles.default,
          style,
          {
            fontSize: changedStyle?.fontSize
              ? changedStyle.fontSize / fontScale
              : undefined,
            lineHeight: changedStyle?.lineHeight
              ? changedStyle.lineHeight / fontScale
              : undefined,
          },
        ]}
        {...props}
        ref={ref}
      />
    );
  }
);
// export default memo(TextInput);
export default TextInput;

const styles = StyleSheet.create({
  default: {
    includeFontPadding: false,
    textAlignVertical: 'center',
    padding: 0,
    margin: 0,
  },
});
