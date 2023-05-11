import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native/types';
import RootStackNavigator from './RootStackNavigator/RootStackNavigator';

const Navigation = () => {
  return (
    <NavigationContainer
    // for appScheme
    // linking={linking}
    >
      {/* <StatusBar /> */}
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
