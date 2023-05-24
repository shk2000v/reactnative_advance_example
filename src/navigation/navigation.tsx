import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import RootStackNavigator from './RootStackNavigator/RootStackNavigator';

const Navigation = () => {
  return (
    <NavigationContainer
    // for appScheme
    // linking={linking}
    >
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
