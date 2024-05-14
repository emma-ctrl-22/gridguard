import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, useColorScheme ,Image} from 'react-native';
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';

const Login = () => {
  const colorScheme = useColorScheme();
  const [activeRadioButton, setActiveRadioButton] = useState(1);

  const slides = [
    {
      img: require('./bolt.jpg'), // update the path to your image
      text1: 'Get a new Experience of',
      text2: 'being ahead',
      text3: 'Receive notifications regarding the availability of',
      text4: 'electricity or water in your neighborhood'
    },
    {
      img: require('./l1.png'), // update the path to your second image
      text1: 'Stay connected with',
      text2: 'your community',
      text3: 'Join a network of users who share updates,',
      text4: 'post about events and help each other stay informed'
    },
    {
      img: require('./l1.png'), // update the path to your second image
      text1: 'Get rewarded for your',
      text2: 'engagements on the app',
      text3: 'Receive notifications regarding the availability of',
      text4: 'electricity or water in your neighborhood'
    },
  ];
  const renderRadioButton = (index) => (
    <TouchableOpacity
      style={[styles.radioButton, activeRadioButton === index && styles.radioButtonActive]}
      onPress={() => setActiveRadioButton(index)}
    >
      <View />
    </TouchableOpacity>
  );
  const styles = StyleSheet.create({
    // Include your existing styles here
    swiper: {
      height: '60%',
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
    },
    image: {
      width: '95%',
      height: '70%',
      borderRadius: 30,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? '#000' : '#fff', // Set background color based on color scheme
    },
    text: {
      color: colorScheme === 'dark' ? '#fff' : '#000', // Set text color based on color scheme
    },

    text1:{
      fontSize: 30,
      fontWeight: 'bold',
      
    },
    text0:{
      fontSize: 30,
      fontWeight: 'bold',
      marginTop:15
    },
    text2:{
      marginTop: 15,
      fontSize: 15,
      fontWeight: '100'
    },
    text3:{
      fontSize: 15,
      fontWeight: '100',
      marginBottom:30
    },
    radioButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      
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
    button:{
      width:140,
      height:50,
      borderColor:'#02B2DD',
      borderWidth:1,
      justifyContent:'center',
   borderRadius:10,
   marginRight:20,
      alignItems:'center',
    
      
    },
    button1:{
      width:140,
      height:50,
     

      justifyContent:'center',
   borderRadius:10,
   
      alignItems:'center',
      backgroundColor:'#02B2DD',
      
    },
   
    
    // Rest of your styles...
  });

  return (
    <SafeAreaView style={styles.container}>
      <Swiper style={styles.swiper} showsButtons={false} loop={false}>
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <Image style={styles.image} source={slide.img} />
            <Text style={[styles.text, styles.text0]}>{slide.text1}</Text>
            <Text style={[styles.text, styles.text1]}>{slide.text2}</Text>
            <Text style={[styles.text, styles.text2]}>{slide.text3}</Text>
            <Text style={[styles.text, styles.text3]}>{slide.text4}</Text>
          </View>
        ))}
      </Swiper>
   
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: '#02B2DD', fontSize: 17 }}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={{ color: '#FFFFFF', fontSize: 17 }}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
