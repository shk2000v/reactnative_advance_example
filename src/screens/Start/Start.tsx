import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Text from '../../atoms/Text/Text';
import { FC } from 'react';
import { RootStackScreenProps } from '../../navigation/RootStackNavigator/types';
import { PressableButton } from '../../atoms/Button/Button';
import { WIDTH } from '../../constants';

const Start: FC<RootStackScreenProps<'Start'>> = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ height: '100%' }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={[styles.default]}>
          <Text style={[styles.text]}>Start Page</Text>
        </View>
        <PressableButton
          pressableStyle={[styles.button]}
          onPress={() => navigation.navigate('Home')}
        >
          AtomComponents
        </PressableButton>
        <PressableButton>asda</PressableButton>
      </ScrollView>
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

  button: {
    width: 300 * WIDTH,
    height: 40 * WIDTH,
    marginVertical: 12 * WIDTH,
  },
});
