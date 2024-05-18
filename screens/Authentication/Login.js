import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity,  Image,TextInput } from 'react-native';
import { useState } from 'react';
import Logo from '../../assets/GridGuard-Logo.png'
import GoogleBtn from '../../components/GoogleBtn';
import LoginForm from '../../components/Forms/LoginForm';
import Divider from '../../components/Divider';

const Login = () => {
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headertxt}>Sign in to your Account</Text>
      <Text style={styles.smalltxt}>Enter your details to sign in to your account</Text>
      <Image source={Logo} style={styles.logo}/>
      <GoogleBtn title="Sign in with Google"/>
      <Divider />
      <Text style={styles.label}>
        Email
      </Text>
      <TextInput 
        onChangeText={(text) => setEmail(text)} 
        style={styles.emailInput} 
        keyboardType="email-address" 
        placeholder='Enter an email' 
        placeholderTextColor="#CDCDE0"
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:  '#fff', // Set background color based on color scheme
  },
  headertxt:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000' // Set text color based on color scheme
  },
  smalltxt:{
    fontSize: 15,
    color: '#000000', // Set text color based on color scheme
    opacity:0.5
  },
  logo:{
    marginTop:"6%"
  },
  label:{
    marginTop: "6%",
    marginLeft: "2%",
    color: "#02B2DD",
    fontSize: 14,
    alignSelf: "flex-start",
    marginLeft:"10%"
    },
    emailInput: {
      borderColor:"#000",
      borderWidth:1,
      width: "90%",
      height: "6%",
      borderRadius: 8,
      marginTop: "2%",
      alignSelf: "center",
      color: "#fff",
      fontSize: 15,
      paddingLeft: "2%"
    }
});
