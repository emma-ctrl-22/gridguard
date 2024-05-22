import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabs from '../screens/App/Tabs/layout';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen options={{ headerShown: false }} name="Tabs" component={AppTabs} />
    </Stack.Navigator>
  );
};

export default AppStack;