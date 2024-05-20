import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react';
import LogoGroup from '../../assets/LogoGroup.svg';

export default function OnBoard() {
  return (
    <SafeAreaView style={styles.container}>
      <LogoGroup width={100} height={100}  />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
})