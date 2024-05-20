import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Pressable, Alert, useWindowDimensions } from 'react-native';
import LockIcon from '../../../assets/LockIcon.svg';
import SubmitButton from '../../../components/SubmitButton';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPass() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSubmit = () => {
    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter an email');
    } else {
      Alert.alert('Password Reset', `A reset link has been sent to ${email}`, [
        { text: 'OK', onPress: () => navigation.navigate('CodeEntry', { email }) }
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LockIcon width={200} height={200} />
      <Text style={[styles.txt1, isTablet && styles.tabletTxt1]}>Forgotten your password?</Text>
      <Text style={[styles.txt2, isTablet && styles.tabletTxt2]}>
        Enter your registered email below to receive a password reset code
      </Text>
      <TextInput
        placeholder='Enter email address'
        placeholderTextColor='#c0c0c0'
        style={[styles.input, isTablet && styles.tabletInput]}
        value={email}
        onChangeText={handleEmailChange}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <SubmitButton
        width="85%"
        height={50}
        text='Continue'
        color='#fff'
        bR={8}
        onPress={handleSubmit}
      />
      <Pressable style={{ marginTop: "4%" }}>
        <Text style={[styles.txt2, isTablet && styles.tabletTxt2]}>
          By continuing you agree to our {`\n`} Terms & Conditions
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt1: {
    fontWeight: "700",
    fontSize: 22,
    marginTop: "20%",
  },
  tabletTxt1: {
    fontSize: 28,
  },
  txt2: {
    opacity: 0.5,
    width: "70%",
    textAlign: "center",
    marginTop: "4%",
  },
  tabletTxt2: {
    fontSize: 18,
  },
  input: {
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: "85%",
    height: 50,
    marginTop: "9%",
    borderRadius: 8,
    padding: 14,
    marginBottom: "20%",
  },
  tabletInput: {
    fontSize: 18,
    height: 60,
    width:"60%"
  },
});
