import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})