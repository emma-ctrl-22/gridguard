import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
//import { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
//import { AuthContext } from './context/AuthContext';
import { useState } from 'react';

export default function Navigations() {
  //const { isLoading, userToken,userInfo } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(true);
  const [userInfo, setUserInfo] = useState({
    username: "Emmanuel",
    email:"emmanuelnyatepe35@gmail.com"
  });
  if (isLoading) {
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  }

  return (
    <NavigationContainer>
      {userToken ? <AppStack/> : <AuthStack />}
    </NavigationContainer>
  );
}