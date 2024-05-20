import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Authentication/Login';
import RegistrationScreen from '../screens/Authentication/SignUp';
import Intro from '../screens/Authentication/Intro';
import ForgotPass from '../screens/Authentication/ForgotPassword/ForgotPass';
import CodeEntry from '../screens/Authentication/ForgotPassword/CodeEntry';
import ResetPass from '../screens/Authentication/ForgotPassword/ResetPass';
import OnBoard from '../screens/Authentication/OnBoard';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name='Intro' component={Intro}/>
      <Stack.Screen options={{headerShown:false}} name="onBoard" component={OnBoard} />
      <Stack.Screen options={{headerShown:false}} name="login" component={LoginScreen} />
      <Stack.Screen options={{headerShown:false}} name="signIn" component={RegistrationScreen} />
      <Stack.Screen options={{headerShown:false}} name="forgotPass" component={ForgotPass} />
      <Stack.Screen options={{headerShown:false}} name="CodeEntry" component={CodeEntry} />
      <Stack.Screen options={{headerShown:false}} name="ResetPass" component={ResetPass} />
    </Stack.Navigator>
  );
};

export default AuthStack;