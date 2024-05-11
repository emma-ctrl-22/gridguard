import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Social = () => {
  return (
    <View style={styles.container}>
      <Text>Social</Text>
    </View>
  )
}

export default Social

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})