import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <SafeAreaView styles={styles.container}>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})