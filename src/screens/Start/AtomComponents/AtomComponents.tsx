import { FC } from 'react';
import { SafeAreaView, View } from 'react-native';
import { RootStackScreenProps } from '../../../navigation/RootStackNavigator/types';
import Text from '../../../atoms/Text/Text';

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
