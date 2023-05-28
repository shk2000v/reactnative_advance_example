import { NativeStackScreenProps } from '@react-navigation/native-stack';

/**
 * StartStackParamList
 */
export type StartStackParamList = {
  Start: undefined | { where: keyof RootStackParamList };
  StatusManage: undefined;
  AtomComponents: undefined;
  ApiTest: undefined;
  UserDetail?: { id: number };
};

export type HomeStackParamList = {
  Home: undefined;
};

type StackParamList = StartStackParamList & HomeStackParamList;

export type RootStackParamList = {
  [key in keyof StackParamList]: StackParamList[key] extends infer Param
    ? Param extends undefined
      ? undefined | StackParamList[key]
      : StackParamList[key]
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
