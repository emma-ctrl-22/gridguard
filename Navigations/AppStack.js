import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../screens/App/Tabs/layout';

const Stack = createNativeStackNavigator();

const AppStack = ({ initialRouteName }) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen options={{ headerShown: false }} name="Tabs" component={Tabs} />
     
    </Stack.Navigator>
  );
};

export default AppStack;