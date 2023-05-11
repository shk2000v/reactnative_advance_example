import React from 'react';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import Text from './src/atoms/Text/Text';
import { FONT } from './src/constants';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
      // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      // barStyle={'default'}
      // backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={{ height: '100%' }}
      >
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            flex: 1,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: !isDarkMode ? Colors.black : Colors.white }}>
            Test
          </Text>
          <Text
            style={{
              color: !isDarkMode ? Colors.black : Colors.white,
              fontFamily: FONT('B'),
            }}
          >
            Test
          </Text>
          <Text
            style={{
              color: !isDarkMode ? Colors.black : Colors.white,
              fontFamily: FONT('EB'),
            }}
          >
            Test
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
