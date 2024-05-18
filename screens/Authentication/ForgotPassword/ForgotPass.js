import React from 'react';
import { StyleSheet, Text, SafeAreaView,TextInput } from 'react-native';
import LockIcon from '../../../assets/LockIcon.svg'; // Ensure this path is correct
import SubmitButton from '../../../components/SubmitButton';


export default function ForgotPass() {
  return (
    <SafeAreaView style={styles.container}>
      <LockIcon width={200} height={200} />
      <Text style={styles.txt1}>Forgotten your password?</Text>
      <Text style={styles.txt2}>Enter your registered email below to recieve password reset code</Text>
      <TextInput placeholder='Enter email address' placeholderTextColor='#c0c0c0' style={styles.input}/>
      <SubmitButton width="85%" height={50} text='Continue' color='#fff' bR={8} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt1:{
    fontWeight:"700",
    fontSize:22,
    marginTop:"20%"
  },
  txt2:{
    opacity:0.5,
    width:"70%",
    textAlign:"center",
    marginTop:"4%"
  },
  input:{
    borderColor:"#c0c0c0",
    borderWidth:1,width:"85%",
    height:50,
    marginTop:"9%",
    borderRadius:8,
    padding:14,
    marginBottom:"25%"
  }
});
