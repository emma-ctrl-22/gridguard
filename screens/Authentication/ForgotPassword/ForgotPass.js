import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';
import LockIcon from '../../../assets/LockIcon.svg'; // Ensure this path is correct
import SubmitButton from '../../../components/SubmitButton';
import {useNavigation } from '@react-navigation/native';
export default function ForgotPass() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSubmit = () => {
    if (email.trim() === '') {
      // Show an alert if the email input is empty
      Alert.alert('Error', 'Please enter an email');
    } else {
      // Show an alert when the email is submitted
      Alert.alert('Password Reset', `A reset link has been sent to ${email}`, [
        { text: 'OK', onPress: () => navigation.navigate('CodeEntry', { email }) }
      ]);
      // Handle further submit logic, e.g., sending the email to your backend
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LockIcon width={200} height={200} />
      <Text style={styles.txt1}>Forgotten your password?</Text>
      <Text style={styles.txt2}>Enter your registered email below to receive a password reset code</Text>
      <TextInput
        placeholder='Enter email address'
        placeholderTextColor='#c0c0c0'
        style={styles.input}
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
        <Text style={styles.txt2}>By continuing you agree to our {`\n`} Terms & Conditions</Text>
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
    marginTop: "20%"
  },
  txt2: {
    opacity: 0.5,
    width: "70%",
    textAlign: "center",
    marginTop: "4%"
  },
  input: {
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: "85%",
    height: 50,
    marginTop: "9%",
    borderRadius: 8,
    padding: 14,
    marginBottom: "20%"
  }
});
