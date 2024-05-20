import { StyleSheet, SafeAreaView, Text, View, Pressable, TextInput, Alert,useWindowDimensions } from 'react-native';
import { useState } from 'react';
import Logo from '../../assets/GridGuard-Logo.svg';
import GoogleBtn from '../../components/GoogleBtn';
import Divider from '../../components/Divider';
import { EvilIcons, Fontisto } from '@expo/vector-icons';
import SubmitButton from '../../components/SubmitButton';
import { useNavigateToScreen } from '../../hooks/useNavigateToScreen';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateToScreen = useNavigateToScreen();
  const {width,height} = useWindowDimensions();

  const isTablet = width >= 768;

  const handleLogin = () => {
    Alert.alert(
      'Sign in Error',
      'Email/Password entered is not valid. Please enter a valid email/password',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headertxt}>Sign in to your Account</Text>
      <Text style={styles.smalltxt}>Enter your details to sign in to your account</Text>
      <Logo/>
      <GoogleBtn title="Sign in with Google" />
      <Divider />
      <Text style={styles.label}>Email</Text>
      <View style={isTablet?styles.TabInputGroup:styles.inputGroup}>
        <Fontisto name="email" size={20} color="#c0c0c0"/>
        <TextInput 
          placeholder='Enter an email' 
          value={email} 
          onChangeText={(text) => setEmail(text)} 
          style={styles.input} 
          placeholderTextColor="#a0a0a0"
        />
      </View>
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputGroup}>
        <EvilIcons name="lock" size={25} color="#c0c0c0" marginLeft="3%" />
        <TextInput 
          placeholder='Enter a secured password' 
          value={password} 
          onChangeText={(text) => setPassword(text)} 
          style={styles.input} 
          placeholderTextColor="#a0a0a0" 
          secureTextEntry 
        />
      </View>
      <Text style={styles.ForgotTxt}>Forgot Password?</Text>
      <SubmitButton text="Log in" width="85%" height="7%" bR={5} bW={0} color="#fff" onPress={handleLogin} />
      <Pressable  style={styles.switchLink} onPress={()=>navigateToScreen('forgotPass')}>
        <Text style={styles.txt1}>Don't have an account?</Text>
        <Text style={styles.txt2}>Signup</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set background color based on color scheme
  },
  headertxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000' // Set text color based on color scheme
  },
  smalltxt: {
    fontSize: 15,
    color: '#000000', // Set text color based on color scheme
    opacity: 0.5
  },
  logo: {
    marginTop: "6%"
  },
  label: {
    marginTop: "6%",
    color: "#02B2DD",
    fontSize: 14,
    alignSelf: "flex-start",
    marginLeft: "8%"
  },
  inputGroup: {
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "85%",
    height: 50,
    borderRadius: 5,
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1%",
    paddingLeft:"2%"
  },
  TabInputGroup: {
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "50%",
    height: 50,
    borderRadius: 5,
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1%",
    paddingLeft:"2%"
  },
  input: {
    width: "90%",
    height: "90%",
    borderRadius: 10,
    fontSize: 18,
    marginLeft: "2%"
  },
  TabInput:{
    width: "90%",
    height: "90%",
    borderRadius: 10,
    fontSize: 18,
    marginLeft: "2%",
    textAlign: "center"
  },
  ForgotTxt: {
    marginTop: "3%",
    color: "#04B5DF",
    fontSize: 15,
    alignSelf: "flex-end",
    marginRight: "7%",
    fontWeight: "bold"
  },
  switchLink: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    height: "5%",
    marginTop: "9%",
    alignSelf: "center",
  },
  txt1: {
    color: "#000",
    fontSize: 15,
    opacity: 0.4
  },
  txt2: {
    color: "#02B2DD",
    fontSize: 15,
    marginLeft: "2%",
  }
});
