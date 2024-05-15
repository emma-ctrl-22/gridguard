import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity,  Image } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/GridGuard-Logo.png'

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headertxt}>Sign in to your Account</Text>
      <Text style={styles.smalltxt}>Enter your details to sign in to your account</Text>
      <Image source={Logo} style={styles.logo}/>
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
  }
});
