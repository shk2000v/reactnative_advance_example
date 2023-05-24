import { PressableProps, TextStyle, ViewStyle } from 'react-native';

export type Props = PressableProps & {
  pressableStyle?: ViewStyle | ViewStyle[];
  textStyles?: TextStyle;
  onPress?: () => void;
  children: string;
};
