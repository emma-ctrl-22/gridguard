// Intro.js
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image,useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import slides from './slideItems';
import { useNavigation } from '@react-navigation/native';
import { useNavigateToScreen } from '../../hooks/useNavigateToScreen';

const Intro = () => {
  const navigation = useNavigation();
  const navigateToScreen = useNavigateToScreen();
  const [activeRadioButton, setActiveRadioButton] = useState(1);
  const {width,height} = useWindowDimensions();

  const isTablet = width >= 768;

  const renderRadioButton = (index) => (
    <TouchableOpacity
      style={[styles.radioButton, activeRadioButton === index && styles.radioButtonActive]}
      onPress={() => setActiveRadioButton(index)}
    >
      <View />
    </TouchableOpacity>
  );

    const navToSignIn = () =>{
      navigation.navigate('login')
    }
    const navToSignUp = () =>{
      navigation.navigate('signIn')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Swiper style={styles.swiper} showsButtons={false} loop={false}>
                {slides.map((slide, index) => (
                    <View key={index} style={styles.slide}>
                        <Image style={styles.image} source={slide.img} />
                        <Text style={ styles.text0}>{slide.text1}</Text>
                        <Text style={ styles.text3}>{slide.text3}</Text>
                        <Text style={ styles.text3}>{slide.text4}</Text>
                    </View>
                ))}
            </Swiper>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={navToSignIn}>
                    <Text style={{ color: '#02B2DD', fontSize: 17 }}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}>
                    <Text style={{ color: '#FFFFFF', fontSize: 17 }} onPress={navToSignUp}> Sign up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Intro;

const styles = StyleSheet.create({
  swiper: {
    height: '90%',
    backgroundColor: "#fff",
    marginTop: "7%"
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
    marginTop: "5%"
  },
  TabImage: {         
    width: '85%',
    height: '75%',
    borderRadius: 30,
    marginTop: "5%"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set background color based on color scheme
  },
  text0: {
    fontSize: 29,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: "center",
    padding: 2,
    color: '#000',
  },
  Tabtext0: {
    fontSize: 39,
    fontWeight: 'bold',
    marginTop: 25,
    textAlign: "center",
    padding: 2,
    color: '#000',
  },
  text3: {
    fontSize: 15,
    fontWeight: '100',
    marginBottom: 30,
    textAlign: "center",
    marginTop: "2%", padding: 8,
    color: '#000',
  },
  Tabtext3: {
    fontSize: 25,
    fontWeight: '100',
    marginBottom: 30,
    textAlign: "center",
    marginTop: "2%", padding: 8,
    color: '#000',
  },
  radioButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:"4%"
  },
  radioButton: {
    height: 12,
    width: 12,
    borderRadius: 10,
    backgroundColor: '#ccc',
    margin: 5,
  },
  radioButtonActive: {
    backgroundColor: '#02B2DD',
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
  TabButton:{
    width: 240,
    height: 80,
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 20,
    alignItems: 'center',
    backgroundColor: '#02B2DD',
  },
  TabButton1:{
    width: 240,
    height: 80,
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 20,
    alignItems: 'center',
    backgroundColor: '#02B2DD',
  },
  button1: {
    width: 140,
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#02B2DD',
  },
});
