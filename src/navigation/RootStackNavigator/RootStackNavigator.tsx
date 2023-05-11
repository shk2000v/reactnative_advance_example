import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import Start from '../../screens/Start/Start';
import Home from '../../screens/Home/Home';

export const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
      </Stack.Group>

      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
