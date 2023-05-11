import { SafeAreaView, StyleSheet, View } from 'react-native';
import Text from '../../atoms/Text/Text';
import { FC } from 'react';
import { RootStackScreenProps } from '../../navigation/RootStackNavigator/types';

const Start: FC<RootStackScreenProps<'Start'>> = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.default]}>
        <Text style={[styles.text]}>Start Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Start;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#222',
  },
});
