import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Reward = () => {
  return (
    <View style={styles.container}>
      <Text>Reward</Text>
    </View>
  )
}

export default Reward

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})