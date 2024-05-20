import { StyleSheet, Text, View, SafeAreaView, useWindowDimensions, Pressable } from 'react-native';
import React from 'react';
import BigLogo from '../../assets/Logo.svg';
import SubmitButton from '../../components/SubmitButton';
import GoogleBtn from '../../components/GoogleBtn';
import { useNavigation } from '@react-navigation/native';

export default function OnBoard() {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  const navigation = useNavigation();

  const navigateToSignIn = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'signIn' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.LogoGroup}>
        <BigLogo style={styles.logo} />
        <View style={styles.TextContainer}>
          <Text style={{ fontSize: 20, color: '#04B5DF', fontWeight: '200' }}>Your Guard,</Text>
          <Text style={{ fontSize: 20, color: '#000', textAlign: 'center', fontWeight: '200' }}>  On Grids </Text>
        </View>
      </View>
      <View style={styles.BtnContainer}>
        <SubmitButton text="Create account" width={isTablet ? '50%' : 325} height={isTablet ? 50 : '23%'} bR={5} bW={0} color="#fff" onPress={navigateToSignIn} />
        <GoogleBtn
          onPress={() => console.log('Google button pressed')}
          title="Sign in with Google"
          isTablet={false}
          width={325}
          height={55}
        />
      </View>
      <Pressable style={styles.switchLink} onPress={() => navigation.navigate('login')}>
        <Text style={styles.txt1}>Already have an account?</Text>
        <Text style={styles.txt2}>Sign in</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  LogoGroup: {
    height: 250,
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  TextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
  BtnContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '30%',
    marginBottom: '0%',
    width: '98%',
  },
  switchLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    alignSelf: 'center',
    marginBottom: '8%',
  },
  txt1: {
    color: '#000',
    fontSize: 15,
    opacity: 0.4,
  },
  txt2: {
    color: '#02B2DD',
    fontSize: 15,
    marginLeft: '2%',
  },
});
