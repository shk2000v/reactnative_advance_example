import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import Start from '../../screens/Start/Start';
import Home from '../../screens/Home/Home';
import StatusManage from '../../screens/Start/StatusManage/StatusManage';
import AtomComponents from '../../screens/Start/AtomComponents/AtomComponents';
import ApiTest from 'src/screens/Start/ApiTest/ApiTest';
import UserDetail from 'src/screens/Start/ApiTest/UserDetail/UserDetail';

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
      <Stack.Screen
        name="StatusManage"
        component={StatusManage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AtomComponents"
        component={AtomComponents}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ApiTest"
        component={ApiTest}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserDetail"
        component={UserDetail}
        options={{ headerShown: false }}
      />

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
