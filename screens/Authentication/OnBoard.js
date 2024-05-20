import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react';
import LogoGroup from '../../assets/LogoGroup.svg';

export default function OnBoard() {
  return (
    <SafeAreaView style={styles.container}>
      <LogoGroup style={styles.logo} width={179} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    logo:{
        
    }
})