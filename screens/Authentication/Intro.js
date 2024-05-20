// Intro.js
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import slides from './slideItems';
import { useNavigation } from '@react-navigation/native';

const Intro = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;

  const navToSignIn = () => {
    navigation.navigate('login');
  };

  const navToSignUp = () => {
    navigation.navigate('onBoard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Swiper style={styles.swiper} showsButtons={false} loop={false}>
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <Image style={isTablet ? styles.tabletImage : styles.image} source={slide.img} />
            <Text style={isTablet ? styles.tabletText0 : styles.text0}>{slide.text1}</Text>
            <Text style={isTablet ? styles.tabletText3 : styles.text3}>{slide.text3}</Text>
          </View>
        ))}
      </Swiper>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, isTablet && styles.tabletButton]} onPress={navToSignIn}>
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button1, isTablet && styles.tabletButton1]} onPress={navToSignUp}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Intro;

const styles = StyleSheet.create({
  swiper: {
    height: '90%',
    backgroundColor: '#fff',
    marginTop: '7%',
  },
  slide: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '95%',
    height: '60%',
    borderRadius: 30,
    marginTop: '5%',
  },
  tabletImage: {
    width: '85%',
    height: '75%',
    borderRadius: 30,
    marginTop: '5%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text0: {
    fontSize: 29,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
    padding: 2,
    color: '#000',
  },
  tabletText0: {
    fontSize: 39,
    fontWeight: 'bold',
    marginTop: 25,
    textAlign: 'center',
    padding: 2,
    color: '#000',
  },
  text3: {
    fontSize: 15,
    fontWeight: '100',
    marginBottom: 30,
    textAlign: 'center',
    marginTop: '2%',
    padding: 8,
    color: '#000',
  },
  tabletText3: {
    fontSize: 25,
    fontWeight: '100',
    marginBottom: 30,
    textAlign: 'center',
    marginTop: '2%',
    padding: 8,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '4%',
  },
  button: {
    width: 140,
    height: 50,
    borderColor: '#02B2DD',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 20,
    alignItems: 'center',
  },
  button1: {
    width: 140,
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#02B2DD',
  },
  tabletButton: {
    width: 240,
    height: 80,
  },
  tabletButton1: {
    width: 240,
    height: 80,
    backgroundColor: '#02B2DD',
  },
  signInText: {
    color: '#02B2DD',
    fontSize: 17,
  },
  signUpText: {
    color: '#FFFFFF',
    fontSize: 17,
  },
});
