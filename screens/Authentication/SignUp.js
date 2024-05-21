import { KeyboardAvoidingView, useWindowDimensions,Alert, TouchableOpacity, StyleSheet, SafeAreaView, Text, View, Image, TextInput, Platform, ScrollView } from 'react-native';
import { useState } from 'react';
import Logo from '../../assets/GridGuard-Logo.png';
import GoogleBtn from '../../components/GoogleBtn';
import Divider from '../../components/Divider';
import { EvilIcons, Fontisto,Feather } from '@expo/vector-icons';
import SubmitButton from '../../components/SubmitButton';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { useNavigation } from '@react-navigation/native';
import { doc, setDoc } from 'firebase/firestore';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigation = useNavigation();
  const {width}= useWindowDimensions();

  const isTablet = width >= 768;

  const handleSignUp = async () => {
    try {
      if (password.length <= 5) {
        Alert.alert("Error", "Password should be more than 5 characters long.");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user information to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: name,
        email: email,
      });

      console.log("Signed up and user information saved to Firestore");
      Alert.alert("Success", "You have signed up successfully!");
      navigation.navigate("login"); // Ensure this is the correct route name
    } catch (err) {
      console.error(err);

      let errorMessage;
      switch (err.code) {
        case "auth/email-already-in-use":
          errorMessage = "Email address is already in use.";
          break;
        case "auth/invalid-email":
          errorMessage =
            "The email address is invalid. Please enter a valid email.";
          break;
        case "auth/weak-password":
          errorMessage = "Password should be at least 6 characters long.";
          break;
        default:
          errorMessage = "An unexpected error occurred. Please try again.";
      }

      Alert.alert("Sign Up Error", errorMessage);
    }
  };

  const handleAlreadyHaveAccount = () => {
    navigation.navigate("login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.headertxt}>Sign up to your Account</Text>
          <Text style={styles.smalltxt}>Get the best experience by signing up with us</Text>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.label}>Full name</Text>
          <View style={styles.inputGroup}>
          <Feather name="user" size={21} color="#c0c0c0" />
            <TextInput 
              placeholder='Enter your full name' 
              value={name} 
              onChangeText={(text) => setName(text)} 
              style={styles.input} 
              placeholderTextColor="#a0a0a0" 
            />
          </View>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputGroup}>
            <Fontisto name="email" size={18} color="#c0c0c0" />
            <TextInput 
              placeholder='Enter your email' 
              value={email} 
              onChangeText={(text) => setEmail(text)} 
              style={styles.input} 
              placeholderTextColor="#a0a0a0" 
            />
          </View>
          <Text style={styles.label}>Phone</Text>
          <View style={styles.inputGroup}>
            <Fontisto name="phone" size={18} color="#c0c0c0" />
            <TextInput 
              placeholder='Enter your phone' 
              value={email} 
              onChangeText={(text) => setEmail(text)} 
              style={styles.input} 
              keyboardType="phone-pad"
              placeholderTextColor="#a0a0a0" 
            />
          </View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputGroup}>
            <EvilIcons name="lock" size={25} color="#c0c0c0" />
            <TextInput 
              placeholder='Enter a secured password' 
              value={password} 
              onChangeText={(text) => setPassword(text)} 
              style={styles.input} 
              placeholderTextColor="#a0a0a0" 
              secureTextEntry 
            />
          </View>
        
          <SubmitButton onPress={handleSignUp} text="Create account" width={335} height="7%" bR={5} bW={0} color="#fff" />
          <TouchableOpacity onPress={handleAlreadyHaveAccount} style={styles.switchLink}>
            <Text style={styles.txt1}>Already have an account? </Text>
            <Text style={styles.txt2}>Sign in</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%"
  },
  headertxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  smalltxt: {
    fontSize: 15,
    color: '#000000',
    opacity: 0.5,
    marginBottom: '6%',
  },
  logo: {
    marginTop: '4%',
  },
  label: {
    marginTop: '6%',
    color: '#02B2DD',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: '0%',
  },
  inputGroup: {
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: '87%',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1%',
    paddingLeft: '3%',
  },
  input: {
    width: '90%',
    height: '90%',
    borderRadius: 10,
    fontSize: 18,
    marginLeft: '2%',
  },
  ForgotTxt: {
    marginTop: '3%',
    color: '#04B5DF',
    fontSize: 15,
    alignSelf: 'flex-end',
    marginRight: '7%',
    fontWeight: 'bold',
  },
  switchLink: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    height: '5%',
    marginTop: '9%',
    alignSelf: 'center',
  },
  txt1: {
    color: '#000',
    fontSize: 15,
    opacity: 0.4,
  },
  txt2: {
    color: '#02B2DD',
    fontSize: 15,
    marginLeft: '2%',
  },
});
