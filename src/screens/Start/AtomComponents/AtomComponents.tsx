import { FC } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Text from 'src/atoms/Text/Text';
import { WIDTH } from 'src/constants';
import { RootStackScreenProps } from 'src/navigation/RootStackNavigator/types';

const AtomComponents: FC<RootStackScreenProps<'AtomComponents'>> = ({
  navigation,
  route,
}) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <Text>asdad</Text>
      <View style={{ backgroundColor: '#fff' }}>
        <Text>asdad</Text>
        <Text>asdad</Text>
      </View>
    </SafeAreaView>
  );
};

export default AtomComponents;

const Wrapper = () => {};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16 * WIDTH,
  },
});
