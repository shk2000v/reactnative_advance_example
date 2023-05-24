import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, useColorScheme } from 'react-native';
import Navigation from './src/navigation/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { QueryClient, QueryClientProvider } from 'react-query';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </QueryClientProvider>
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
