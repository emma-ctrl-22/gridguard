import { StyleSheet, Text, View, TouchableOpacity, useColorScheme } from 'react-native';
import React from 'react';

const Login = () => {
  const colorScheme = useColorScheme(); // Get the current color scheme (light or dark)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? '#000' : '#fff', // Set background color based on color scheme
    },
    text: {
      color: colorScheme === 'dark' ? '#fff' : '#000', // Set text color based on color scheme
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
