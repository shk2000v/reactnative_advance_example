import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import Text from '../../atoms/Text/Text';
import { FC } from 'react';
import { RootStackScreenProps } from '../../navigation/RootStackNavigator/types';

const Home: FC<RootStackScreenProps<'Home'>> = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.default]}>
        <Text style={[styles.text]}>Home Screen Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

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
