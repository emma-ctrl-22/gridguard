import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { useState } from 'react';
import Logo from '../../assets/GridGuard-Logo.png'
import GoogleBtn from '../../components/GoogleBtn';
import LoginForm from '../../components/Forms/LoginForm';
import Divider from '../../components/Divider';
import { EvilIcons, Fontisto } from '@expo/vector-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headertxt}>Sign in to your Account</Text>
      <Text style={styles.smalltxt}>Enter your details to sign in to your account</Text>
      <Image source={Logo} style={styles.logo} />
      <GoogleBtn title="Sign in with Google" />
      <Divider />
      <Text style={styles.label}>
        Email
      </Text>
      <View style={styles.inputGroup}>
        <Fontisto name="email" size={24} color="#c0c0c0" />
        <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.input} />
      </View>
      <View style={styles.inputGroup}>
        <EvilIcons name="lock" size={24} color="black" />
        <TextInput value={password} onChangeText={(text) => setPassword(text)} style={styles.input} />
      </View>
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
    backgroundColor: "#ECECEC",
    width: "85%",
    height: "8%",
    borderRadius: 5,
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  },
  input: {
    width: "90%",
    height: "90%",
    borderRadius: 10,
    fontSize: 18,
    marginLeft: "2%"
  }
});
