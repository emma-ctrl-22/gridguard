import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import LockIcon from '../../../assets/LockIcon.svg'; // Ensure this path is correct

export default function ForgotPass() {
  return (
    <SafeAreaView style={styles.container}>
      <LockIcon width={100} height={100} />
      <Text>ForgotPass</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
