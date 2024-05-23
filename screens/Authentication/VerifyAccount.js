import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import RadioButtons from '../App/Components/RadioButtons'
import SubmitButton from '../../components/SubmitButton'
import { useNavigation } from '@react-navigation/native'

export default function VerifyAccount({route}) {
    const {phone,email}=route.params;
    const navigation = useNavigation();
    const [selectedValue, setSelectedValue] = useState(null);
    const nextScreen = 'Congrats'
    const onSelect = (value) => {
      setSelectedValue(value);
      console.log(selectedValue)
    };

    const navCodeEntry = () =>{
        if (selectedValue) {
          navigation.navigate('CodeEntry',{ selectedValue,nextScreen });
        }
    }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.Header}>
            Verify your account
        </Text>
        <Text style={styles.subText}>
            Select how you want to receive your {'\n'} verification code 
        </Text>
        <Text style={styles.question}>
            How do you want to receive your code?
        </Text>
        <RadioButtons phone={phone} email={email} onSelect={onSelect}/>
        <SubmitButton onPress={navCodeEntry} text="Confirm" width={335} height="7%" bR={5} bW={0} color="#fff" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    Header:{
        fontWeight:'700',
        fontSize:25,
        marginTop:"25%"
    },
    subText:{
        color:"#c0c0c0",
        textAlign:"center"
    },
    question:{
        fontSize:17,
        fontWeight:"300",
        marginTop:"16%"
    }
})
