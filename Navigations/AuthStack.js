import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Authentication/Login';
import RegistrationScreen from '../screens/Authentication/SignUp';
import Intro from '../screens/Authentication/Intro';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name='Intro' component={Intro}/>
      <Stack.Screen options={{ headerShown: false }} name="login" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name="signIn" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;