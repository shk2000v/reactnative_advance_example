import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Animated } from 'react-native';

export type Animated = { animated?: boolean };
export type ScrollY = { scrollY?: Animated.Value };

/**
 * StartStackParamList
 */
export type StartStackParamList = {
  Start: undefined | { where: keyof RootStackParamList };
};

export type HomeStackParamList = {
  Home: undefined;
};

type StackParamList = StartStackParamList & HomeStackParamList;

export type RootStackParamList = {
  [key in keyof StackParamList]: StackParamList[key] extends infer Param
    ? Param extends undefined
      ? undefined | (StackParamList[key] & Animated & ScrollY)
      : StackParamList[key] & Animated & ScrollY
    : never;
};

// export type TabStackParamList = {
//   Tab: undefined | NavigatorScreenParams<RootTabParamList>;
// };

// export type RootTabParamList = {
//   Home: undefined;
//   Team: undefined;
//   Competition: undefined;
//   Scrim: undefined;
//   MyPage: undefined;
// };
// export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
//   CompositeScreenProps<
//     BottomTabScreenProps<RootTabParamList, Screen>,
//     NativeStackScreenProps<RootStackParamList>
//   >;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
