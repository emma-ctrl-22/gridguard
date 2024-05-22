import { StyleSheet, Text, Pressable, SafeAreaView, View } from 'react-native';
import React from 'react';
import Check from '../../assets/Check.svg';
import SubmitButton from '../../components/SubmitButton';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Check style={styles.logo} />
        <Text style={styles.headerText}>Account Successfully Created</Text>
        <Text style={styles.subText}>
          Your account has been created successfully.{"\n"}Press continue to begin using the app
        </Text>
        <SubmitButton onPress='' text="Continue" width={335} height="7%" bR={5} bW={0} color="#fff" />
        <Pressable style={{ marginTop: "4%" }}>
          <Text style={{fontSize:13,color:"#c0c0c0",textAlign:"center"}}>
            By continuing you agree to our{"\n"}Terms & Conditions
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  logo: {
    alignSelf: "center",
    marginTop: "30%",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "600",
    marginTop: "25%",
  },
  subText: {
    color: "#c0c0c0",
    fontSize: 15,
    textAlign: "center",
    marginBottom:"60%"
  },
});
