import { SafeAreaView, StyleSheet } from 'react-native';
import Text from 'src/atoms/Text/Text';
import { WIDTH } from 'src/constants';

const ApiTest = () => {
  return (
    <SafeAreaView style={[styles.default]}>
      <Text>ApiTest</Text>
    </SafeAreaView>
  );
};

export default ApiTest;

const styles = StyleSheet.create({
  default: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20 * WIDTH,
  },
});
