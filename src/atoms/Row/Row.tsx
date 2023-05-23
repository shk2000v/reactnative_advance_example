import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';

type RowProps = {
  style?: ViewStyle | ViewStyle[];
  children?: ReactNode;
};

const Row = ({ children, style }: RowProps) => {
  return <View style={[{ flexDirection: 'row' }, style]}>{children}</View>;
};

export default Row;
